"use strict";

/**
 * banner controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::banner.banner", ({ strapi }) => ({
  async find(ctx) {
    // Set default pagination to 100 entries
    ctx.query = {
      ...ctx.query,
      pagination: {
        ...ctx.query.pagination,
        pageSize: 100,
      },
    };

    // Call the default core controller action
    const { data, meta } = await super.find(ctx);

    return { data, meta };
  },
}));
