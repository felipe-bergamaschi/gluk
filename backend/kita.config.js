const path = require('path');

/** @type {import('@kitajs/runtime').KitaConfig} */
module.exports = {
  tsconfig: require.resolve('./tsconfig.json'),
  routes: {
    // format: require('../../.prettierrc.js'),
    output: path.resolve(__dirname, './src/routes.ts'),

    // for tests to work
    exportControllers: true
  },
  params: {
    // FarmDay: [path.resolve(__dirname, './src/params/farm-day'), { schemaTransformer: true }],
    // Authorized: [path.resolve(__dirname, './src/params/authorized'), { schemaTransformer: true }],
    // FileUpload: [path.resolve(__dirname, './src/params/file-upload'), { schemaTransformer: true }],
    // FileStream: [path.resolve(__dirname, './src/params/file-stream'), { schemaTransformer: true }]
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
