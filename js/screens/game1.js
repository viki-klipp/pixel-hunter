import * as utils from '../utils';
import game2 from './game2';
import renderStats from '../stats';
import getOption from '../game-option';
import {levels} from '../data';
import {changeGameScreen} from '../change-screen';

export default (state) => {
  const html = `<div class="game">
  <p class="game__task">${levels[state.level].description}</p>
  <form class="game__content">
    ${getOption(`http://placehold.it/468x458`, `Option 1`, 468, 458, `question1`)}
    ${getOption(`http://placehold.it/468x458`, `Option 2`, 468, 458, `question2`)}
  </form>
  ${renderStats(state.results)}
  </div>`;

  const element = utils.getElementFromTemplate(html);
  const radioListNodes = element.querySelectorAll(`input[type=radio]`);

  Array.from(radioListNodes).forEach((el) => {
    el.addEventListener(`change`, (evt) => {
      let question1 = element.querySelector(`input[name="question1"]:checked`);
      let question2 = element.querySelector(`input[name="question2"]:checked`);

      if (question1 && question2) {
        changeGameScreen(state, game2);
      }
    });
  });

  return element;
};

