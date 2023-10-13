import type { FastifyInstance, FastifySchema } from 'fastify';
import { readFile, writeFile } from 'fs/promises';

export async function updateSwagger(app: FastifyInstance) {
  const swagger = JSON.stringify(app.swagger(), null, 2);

  try {
    const current = await readFile('./swagger.json', 'utf-8');

    if (current === swagger) {
      return;
    }
  } catch {}

  await writeFile('./swagger.json', swagger);
}

export function mergeSchemaHeaders(
  schema: FastifySchema,
  headerName: string,
  headerType: string,
  options: { format?: string; pattern?: string } = {}
) {
  const headers = (schema.headers ??= {} as any);

  headers.$id ??= `${schema.operationId}Headers`;
  headers.properties ??= {};
  headers.required ??= [];
  headers.type = 'object';
  headers.properties[headerName] = { type: headerType, ...options };
}
