export const $ = (query) => document.querySelector(query);
export const hideEl = (element) => element.classList.add('hidden');
export const appearEl = (element) => element.classList.remove('hidden');
export const createEl = ({ tag, text, attributes }) => {
    const el = document.createElement(tag);
    const content = document.createTextNode(text);
    el.append(content);
    Object.entries(attributes).forEach(([key, value]) => {
        el.setAttribute(key, value);
    });
    return el;
};
