import {getHeader} from './header';

const mainNode = document.querySelector(`main`);
const mainCentralNode = mainNode.querySelector(`#main`);

/**
 * clear the content of the element
 */
const clearMainElement = () => {
  mainCentralNode.innerHTML = ``;
};

/**
 * return element from template
 *
 * @param {string} html
 * @return {Element}
 */
export const getElementFromTemplate = (html) => {
  let element = document.createElement(`div`);
  element.innerHTML = html;

  return element.querySelector(`div`);
};

/**
 * show screen
 *
 * @param {Node} el
 * @param {boolean} header
 */
export const showScreen = (el, header = false) => {
  let headerNode = document.querySelector(`header`);
  if (headerNode) {
    mainNode.removeChild(headerNode);
  }

  if (header) {
    mainNode.insertBefore(getHeader(), mainCentralNode);
  }

  clearMainElement();
  mainCentralNode.appendChild(el);
};
