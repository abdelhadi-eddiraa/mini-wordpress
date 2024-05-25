// utils.ts
export function getById<T extends HTMLElement>(container: HTMLElement, id: string): T {
  const element = container.querySelector<T>(`#${id}`);
  if (!element) {
    throw new Error(`Unable to find an element with ID #${id}.`);
  }
  return element;
}
