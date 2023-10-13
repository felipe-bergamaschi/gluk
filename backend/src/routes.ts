// This file contains hardcoded paths to controllers ans schemas.
// It should be in your .gitignore and NOT be committed to source control.

import type {
  RouteContext,
  ProvidedRouteContext,
  KitaConfig,
} from "@kitajs/runtime";
import fp from "fastify-plugin";
import "@fastify/swagger";
//@ts-ignore - we may have import type errors
import * as HealthcheckController from "./routes/healthcheck";
//@ts-ignore - we may have import type errors
import * as UsersController from "./routes/users";

/**
 * The Kita generated fastify plugin. Registering it into your fastify instance will
 * automatically register all routes, schemas and controllers.
 *
 * @example
 * ```ts
 * import { Kita } from './routes'; // this file
 * import app from './fastify-app';
 *
 * app.register(Kita, { context: { ... } })
 * ```
 */
export const Kita = fp<{}>(
  //@ts-ignore - options may not be used
  async (fastify, options) => {
    fastify.addSchema({
      $id: "HealthcheckControllerGetResponse",
      type: "object",
      properties: {
        status: {
          type: "string",
        },
        version: {
          type: "string",
        },
        uptime: {
          type: "number",
        },
      },
      required: ["status", "version", "uptime"],
      additionalProperties: false,
    });

    fastify.addSchema({
      $id: "UsersControllerGetResponse",
      type: "array",
      items: {
        type: "object",
        properties: {
          name: {
            type: "string",
          },
          id: {
            type: "string",
          },
        },
        required: ["name", "id"],
        additionalProperties: false,
      },
    });

    fastify.get(
      "/healthcheck",
      {
        schema: {
          operationId: "healthCheck",
          response: {
            "2xx": { $ref: "HealthcheckControllerGetResponse" },
            "4xx": { $ref: "ErrorResponse" },
            "5xx": { $ref: "ErrorResponse" },
          },
          tags: ["X-HIDDEN"],
        },
      },
      //@ts-ignore - we may have unused params
      async (request, reply) => {
        return HealthcheckController.get();
      }
    );

    fastify.get(
      "/users",
      {
        schema: {
          operationId: "users",
          response: {
            "2xx": { $ref: "UsersControllerGetResponse" },
            "4xx": { $ref: "ErrorResponse" },
            "5xx": { $ref: "ErrorResponse" },
          },
          tags: ["users"],
        },
      },
      //@ts-ignore - we may have unused params
      async (request, reply) => {
        return UsersController.get();
      }
    );
  },
  {
    name: "Kita",
    fastify: "4.x",
    // Ensure prefixes are applied to all routes
    encapsulate: true,
  }
);

export * as HealthcheckController from "./routes/healthcheck";
export * as UsersController from "./routes/users";
