const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::guide.guide', ({ strapi }) => ({	

	async findOne(ctx) {
    const { slug } = ctx.params;
    const { query } = ctx;

    const entity = await strapi.service('api::guide.guide').findOne(slug, query);
    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

    return this.transformResponse(sanitizedEntity);
  },

}));
