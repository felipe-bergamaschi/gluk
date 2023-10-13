const path = require('path');

/** @type {import('@kitajs/runtime').KitaConfig} */
module.exports = {
  tsconfig: require.resolve('./tsconfig.json'),
  routes: {
    output: path.resolve(__dirname, './src/routes.ts'),

    exportControllers: true
  },
  schema: {
    defaultResponse: '2xx',
    responses: {
      '4xx': { $ref: 'ErrorResponse' },
      '5xx': { $ref: 'ErrorResponse' }
    },
    generator: {
      additionalProperties: false
    },
  },
};
