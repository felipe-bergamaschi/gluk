import type { Route } from '@kitajs/runtime';

/**
 * @tag users
 */
export async function get(this: Route<'users'>) {
  return [
    {
      "name": "Felipe Bergamaschi",
      "id": "clnm0m6ih3oxl01uid1nzbwi3"
    },
    {
      "name": "Public",
      "id": "PUBLIC"
    }
  ]
}
