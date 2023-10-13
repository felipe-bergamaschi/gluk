import fastify from 'fastify';
import { Log } from './logger';
import { Kita } from './routes';
import { Env } from './util/env';
import addFormats from 'ajv-formats'

const { version } = require('../package.json');

export async function createApp() {
  const app = fastify({
    ignoreTrailingSlash: true,
    logger: Log.child({ name: 'Fastify' }),
    disableRequestLogging: true,
    ajv: {
      plugins: [addFormats],
      customOptions: {
        removeAdditional: 'all',
        allowUnionTypes: true
      }
    },
    serializerOpts: {
      ajv: {
        allowUnionTypes: true,
        strictNumbers: 'log'
      }
    },
  });

  await app.register(await import('@fastify/cors'), {
    prefix: Env.BASE_PATH
  });

  await app.register(await import('@fastify/swagger'), {
    mode: 'dynamic',
    prefix: Env.BASE_PATH,

    openapi: {
      openapi: '3.1.0',
      info: {
        contact: {
          name: 'Vou de motinha',
          email: 'voudemotinha@midisoft.com.br'
        },
        title: 'Vou de motinha',
        version,
        description: 'A complete REST API for Vou de motinha',
        license: {
          name: 'LICENSED',
          identifier: 'LICENSED'
        }
      },
      servers: [{ url: `http://${Env.HOST}:${Env.PORT}${Env.BASE_PATH}` }],
      components: {
        securitySchemes: {
          default: {
            type: 'apiKey',
            name: 'Authorization',
            in: 'header'
          }
        }
      }
    },

    refResolver: {
      buildLocalReference: (json: any, _: unknown, __: unknown, i: number) =>
        json.$id || json.$title || json.name || `def-${i}`
    }
  });

  await app.addSchema({
    $id: 'ErrorResponse',
    type: 'object',
    properties: {
      statusCode: { type: 'number' },
      message: { type: 'string' },
      error: {
        anyOf: [
          {
            type: 'object',
            properties: {
              // prisma errors may include clientVersion which is a security risk
              clientVersion: { type: 'null' }
            },
            additionalProperties: true
          },
          { type: 'string' }
        ]
      }
    },
    required: ['statusCode', 'message'],
    additionalProperties: true
  });

  await app.register(Kita, {
    prefix: Env.BASE_PATH
  });

  return app;
}
