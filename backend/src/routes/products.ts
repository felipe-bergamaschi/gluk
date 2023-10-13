import type { Route } from '@kitajs/runtime';

import { products } from '../services/mock/products'

/**
 * @tag products
 */
export async function get(this: Route<'products'>) {
  return products
}
