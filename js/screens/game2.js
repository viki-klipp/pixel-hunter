import * as utils from '../utils';
import game3 from './game3';
import renderStats from '../stats';
import getOption from '../game-option';
import {levels} from '../data';
import {changeGameScreen} from '../change-screen';

export default (state) => {
  const html = `<div class="game">
  <p class="game__task">${levels[state.level].description}</p>
  <form class="game__content  game__content--wide">
    ${getOption(`http://placehold.it/705x455`, `Option 1`, 705, 455, `question1`)}
  </form>
  ${renderStats(state.results)}
  </div>`;

  const element = utils.getElementFromTemplate(html);
  const radioListNodes = element.querySelectorAll(`input[type="radio"]`);

  Array.from(radioListNodes).forEach((el) => {
    el.addEventListener(`change`, () => {
      let question = element.querySelector(`input[name="question1"]:checked`);

      if (question) {
        changeGameScreen(state, game3);
      }
    });
  });

  return element;
};
