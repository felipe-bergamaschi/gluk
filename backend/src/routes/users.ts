import type { Route } from '@kitajs/runtime';

/**
 * @tag users
 */
export async function get(this: Route<'users'>) {
  return [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
    { id: 4, name: "David" },
    { id: 5, name: "Eve" },
    { id: 6, name: "Frank" },
    { id: 7, name: "Grace" },
    { id: 8, name: "Helen" },
    { id: 9, name: "Isaac" },
    { id: 10, name: "Jane" },
    { id: 11, name: "Kevin" },
    { id: 12, name: "Linda" },
    { id: 13, name: "Mike" },
    { id: 14, name: "Nancy" },
    { id: 15, name: "Oliver" },
    { id: 16, name: "Pamela" },
    { id: 17, name: "Quincy" },
    { id: 18, name: "Rita" },
    { id: 19, name: "Steve" },
    { id: 20, name: "Tina" }
  ]
}
