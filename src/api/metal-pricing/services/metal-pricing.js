'use strict';

/**
 * metal-pricing service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::metal-pricing.metal-pricing');
