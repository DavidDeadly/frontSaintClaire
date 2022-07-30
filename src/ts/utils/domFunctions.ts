// utility functions
import { domElI } from './interfaces.js';

export const $ = (query: string) => document.querySelector(query);

export const hideEl = (element: HTMLElement) => element.classList.add('hidden');

export const appearEl = (element: HTMLElement) =>
  element.classList.remove('hidden');

export const createEl = ({ tag, text, attributes }: domElI) => {
  const el: HTMLElement = document.createElement(tag);

  if (text) {
    const content = document.createTextNode(text);
    el.append(content);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    el.setAttribute(key, value);
  });

  return el;
};

export const removeChildren = (parent: HTMLElement) =>
  Array.from(parent.children).forEach((ch) => ch.remove());
