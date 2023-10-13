import type { Body, Route } from '@kitajs/runtime';

import { products } from '../../services/mock/products'

interface SearchProducts {
  search: string
}

/**
 * @tag products
 */
export async function post(this: Route<'findProducts'>, dto: Body<SearchProducts>) {
  const regex = new RegExp(dto.search, 'i');

  return products.filter((product) => regex.test(product.name));
}
