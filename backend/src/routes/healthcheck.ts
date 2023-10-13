// import { PRISMA } from '../db/client';
import { Env } from '../util/env';
import type { Route } from '@kitajs/runtime';

/**
 * @tag X-HIDDEN
 */
export async function get(this: Route<'healthCheck'>) {
  return {
    status: 'ok',
    version: Env.VERSION,
    // environment: Env.FDM_ENV,
    uptime: Math.floor(process.uptime()),
    // database: await PRISMA.$queryRaw`SELECT 1`.then(
    //   () => 'ok',
    //   () => 'error'
    // )
  };
}
