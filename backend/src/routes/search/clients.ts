import type { Body, Route } from '@kitajs/runtime';

import { clients } from '../../services/mock/clients'

interface SearchProducts {
  search: string
}

/**
 * @tag products
 */
export async function post(this: Route<'findClients'>, dto: Body<SearchProducts>) {
  const regex = new RegExp(dto.search, 'i');

  return clients.filter((client) => regex.test(client.name));
}
