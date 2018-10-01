import intro from './screens/intro';
import * as utils from './utils';

const html = `<div class="header__back">
  <span class="back">
    <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
    <img src="img/logo_small.png" width="101" height="44">
  </span>
  </div>`;

const element = document.createElement(`header`);
element.classList.add(`header`);
element.innerHTML = html;

const btn = element.querySelector(`.header__back`);
btn.style.cursor = `pointer`;

btn.addEventListener(`click`, () => {
  utils.showScreen(intro);
});

export const getHeader = () => element;

