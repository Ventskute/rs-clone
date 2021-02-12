export const $ = (element) => document.querySelector(element);
export const create = (element) => document.createElement(element);
export const append = (elements, parent) => {
  elements.forEach((element) => parent.appendChild(element));
};

export const fadeRoot = (callback, check = true) => {
  $('#root').classList.add('fade');

  if (callback) {
    setTimeout(callback, 500);
  }

  if (check) {
    setTimeout(() => $('#root').classList.remove('fade'), 500);
  }
};
