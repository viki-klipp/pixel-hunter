import * as utils from '../utils';
import game1 from './game1';
import {initialState} from '../data';

const html = `<div class="rules">
  <h1 class="rules__title">Правила</h1>
  <p class="rules__description">Угадай 10 раз для каждого изображения фото <img
    src="img/photo_icon.png" width="16" height="16"> или рисунок <img
    src="img/paint_icon.png" width="16" height="16" alt="">.<br>
    Фотографиями или рисунками могут быть оба изображения.<br>
    На каждую попытку отводится 30 секунд.<br>
    Ошибиться можно не более 3 раз.<br>
    <br>
    Готовы?
  </p>
  <form class="rules__form">
    <input class="rules__input" type="text" placeholder="Ваше Имя">
    <button class="rules__button  continue" type="submit" disabled>Go!</button>
  </form>
  </div>`;

const element = utils.getElementFromTemplate(html);
const userNameField = element.querySelector(`.rules__input`);
const btn = element.querySelector(`.rules__button`);

userNameField.addEventListener(`input`, function () {
  btn.disabled = userNameField.value.length === 0;
});

btn.addEventListener(`click`, () => {
  utils.showScreen(game1(initialState), true);
});

export default element;
