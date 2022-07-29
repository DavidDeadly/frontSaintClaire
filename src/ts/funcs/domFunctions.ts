// utility functions
export const $ = (query: string) => document.querySelector(query);

export const hideEl = (element: HTMLElement) => element.classList.add('hidden');

export const appearEl = (element: HTMLElement) =>
  element.classList.remove('hidden');

interface domElI {
  tag: string;
  text: string;
  attributes: {
    class: string;
    id: string;
  };
}

export const createEl = ({ tag, text, attributes }: domElI) => {
  const el: HTMLElement = document.createElement(tag);
  const content = document.createTextNode(text);

  el.append(content);

  Object.entries(attributes).forEach(([key, value]) => {
    el.setAttribute(key, value);
  });

  return el;
};
