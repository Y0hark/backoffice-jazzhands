const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::guide.guide', ({ strapi }) => ({	

	async findOne(ctx) {
		const { slug } = ctx.params;

		const guide = await strapi.db.query('api::guide.guide').findOne({ where: { slug } });

		console.log(guide.id);

		const entity = await strapi.entityService.findOne('api::guide.guide', guide.id, {
			populate: {
				'content': {
					populate: '*',
				},
				'author': '*',
				'category': '*',	
			},
		})

		if (!entity) {
			return ctx.notFound('Guide not found');
		}

		const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

		return this.transformResponse(sanitizedEntity);
	},

}));

