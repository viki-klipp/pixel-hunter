import intro from './screens/intro';
import * as utils from './utils';

const html = `<div class="header__back">
  <span class="back">
    <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
    <img src="img/logo_small.png" width="101" height="44">
  </span>
  </div>`;

/*
const timerHtml = `<h1 class="game__timer">NN</h1>`;
const livesHtml = `<div class="game__lives">
      <img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">
      <img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">
      <img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">
    </div>`;*/

const element = document.createElement(`header`);
element.classList.add(`header`);
element.innerHTML = html;

const btn = element.querySelector(`.header__back`);
btn.style.cursor = `pointer`;

btn.addEventListener(`click`, () => {
  utils.showScreen(intro);
});

export const renderHeader = () => element;

