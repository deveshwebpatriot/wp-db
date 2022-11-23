'use strict';

/**
 * allmedia service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::allmedia.allmedia');
