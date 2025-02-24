"use strict";

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/pricing/calculate-price/:slug",
      handler: "pricing.calculatePrice",
      config: {
        auth: false, // adjust as needed
      },
    },
  ],
};
