import * as utils from '../utils';
import {levels} from '../data/data';
import renderStats from '../stats';
import getOption from '../game-option';
import statsScreen from './stats';

export default (state) => {
  const html = `<div class="game">
  <p class="game__task">${levels[state.level].description}</p>
  <form class="game__content  game__content--triple">
    ${getOption(`http://placehold.it/304x455`, `Option 1`, 304, 455)}
    ${getOption(`http://placehold.it/304x455`, `Option 1`, 304, 455)}
    ${getOption(`http://placehold.it/304x455`, `Option 1`, 304, 455)}
  </form>
  ${renderStats(state.results)}
  </div>`;

  const element = utils.getElementFromTemplate(html);
  const optionListNodes = element.querySelectorAll(`.game__option`);

  Array.from(optionListNodes).forEach((el) => {
    el.addEventListener(`click`, () => {
      utils.showScreen(statsScreen, true);
    });
  });

  return element;
};
