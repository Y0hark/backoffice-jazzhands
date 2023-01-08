// 'use strict';

// /**
//  * guide router
//  */

// const { createCoreRouter } = require('@strapi/strapi').factories;

// module.exports = createCoreRouter('api::guide.guide', {
// 	config: {
// 	findOne: {
// 		methods: ['get'],
// 		path: '/guides/:slug',
// 		handler: 'findOne',
// 	}},
// });

module.exports = {
  routes: [
    { // Path defined with a regular expression
      method: 'GET',
      path: '/guides/:slug',
      handler: 'guide.findOne',
    },
	{
		method: 'GET',
		path: '/guides',
		handler: 'guide.find',
	}
  ]
}