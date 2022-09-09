"use strict";

/**
 * opening-hour service.
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::opening-hour.opening-hour");
