"use strict";

module.exports = {
  async calculatePrice(ctx) {
    const { slug } = ctx.params;
    const { metalCode, diamondQuality } = ctx.request.query;
    // Remove newline characters and trim
    const diamondQualityClean = diamondQuality
      ? diamondQuality.replace(/\n/g, "").trim()
      : "";

    console.log("Calculating price for product slug:", slug);
    console.log("Pricing endpoint reached:", {
      slug,
      metalCode,
      diamondQuality: diamondQualityClean,
    });

    const products = await strapi.entityService.findMany(
      "api::product.product",
      {
        filters: { slug: { $eq: slug } },
        populate: ["metal_pricings", "diamond_pricings", "weight"],
      }
    );
    if (!products || products.length === 0) {
      return ctx.throw(404, "Product not found");
    }
    const product = products[0];

    // Determine normalized metal group from metalCode
    // For example, for "14KTR" extract "14KT" (case-insensitive)
    const metalGroupMatch = metalCode.match(/^\d+K/i);
    const normalizedMetalGroup = metalGroupMatch
      ? metalGroupMatch[0].toUpperCase()
      : "";

    let weightData;
    if (Array.isArray(product.weight)) {
      weightData = product.weight.find((w) => {
        // Normalize the weight metal_type by removing spaces and converting to uppercase
        const weightMetalType = w.metal_type.replace(/\s+/g, "").toUpperCase();
        return weightMetalType.includes(normalizedMetalGroup);
      });
    } else {
      weightData = product.weight;
    }
    if (!weightData) {
      return ctx.throw(
        404,
        `Weight data not found for metal group "${normalizedMetalGroup}"`
      );
    }

    const metalWeight = parseFloat(weightData?.metal_weight) || 0;
    const diamondWeight = parseFloat(weightData?.diamond_weight) || 0;
    const makingCharges = Number(product.making_charges) || 0;
    const otherComponents = Number(product.other_components) || 0;

    // --- Metal Pricing Calculation ---
    const selectedMetalPricing = product.metal_pricings.find(
      (mp) => mp.code === metalCode
    );
    if (!selectedMetalPricing) {
      return ctx.throw(404, `Metal pricing not found for code "${metalCode}"`);
    }
    const metalGravity = Number(selectedMetalPricing.gravity) || 1;
    const metalPricePerUnit = Number(selectedMetalPricing.price) || 0;
    const calculatedMetalPrice =
      ((metalWeight * metalGravity) / 15.5) * metalPricePerUnit;

    // --- Diamond Pricing Calculation ---
    const selectedDiamondPricing = product.diamond_pricings.find((dp) => {
      return (
        dp.quality === diamondQualityClean &&
        Number(dp.crt_from) <= diamondWeight &&
        Number(dp.crt_to) >= diamondWeight
      );
    });
    if (!selectedDiamondPricing) {
      return ctx.throw(
        404,
        `Diamond pricing not found for quality "${diamondQualityClean}" covering ${diamondWeight} ct`
      );
    }
    const diamondPricePerCt = Number(selectedDiamondPricing.price) || 0;
    const calculatedDiamondPrice = diamondWeight * diamondPricePerCt;

    // --- Final Price Calculation ---
    const subtotal =
      calculatedMetalPrice +
      calculatedDiamondPrice +
      makingCharges +
      otherComponents;
    const tax = 0.03; // 3% tax
    const taxPrice = subtotal * tax;
    const finalPrice = subtotal + taxPrice;

    ctx.send({
      data: {
        product: {
          slug: product.slug,
          title: product.title,
        },
        metal: {
          code: metalCode,
          metal_type: selectedMetalPricing.metal_type,
          weight: metalWeight,
          gravity: metalGravity,
          price: metalPricePerUnit,
          metalPrice: calculatedMetalPrice.toFixed(2),
        },
        diamond: {
          quality: diamondQualityClean,
          weight: diamondWeight,
          crt_from: selectedDiamondPricing.crt_from,
          crt_to: selectedDiamondPricing.crt_to,
          price: diamondPricePerCt,
          diamondPrice: calculatedDiamondPrice.toFixed(2),
        },
        additional: {
          makingCharges: makingCharges.toFixed(2),
          otherComponents: otherComponents ? otherComponents.toFixed(2) : null,
        },
        breakdown: {
          subtotal: subtotal.toFixed(2),
          tax: tax.toFixed(2),
          taxPrice: taxPrice.toFixed(2),
          finalPrice: finalPrice.toFixed(2),
        },
      },
    });
  },
};
