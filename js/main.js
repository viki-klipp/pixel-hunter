import intro from './screens/intro';
import {showScreen} from './utils';

showScreen(intro);

// (function () {
//   const mainNode = document.querySelector(`main.central`);
//   const templatesNodeList = document.querySelectorAll(`template`);
//   let currentScreen = 1;

//   const CODEKEY = {
//     RIGHT_ARROW: 39,
//     LEFT_ARROW: 37
//   };

//   let showScreen = function (num) {
//     if (num < 0 || num > templatesNodeList.length - 1) {
//       currentScreen = 0;
//       num = 0;
//     }

//     clearMainScreen();
//     mainNode.appendChild(templatesNodeList[num].content.cloneNode(true));
//   };

//   let clearMainScreen = function () {
//     mainNode.innerHTML = ``;
//   };

//   showScreen(currentScreen);

//   let keydownHandler = function (evt) {
//     if (evt.altKey) {
//       if (evt.keyCode === CODEKEY.RIGHT_ARROW) {
//         evt.preventDefault();
//         showScreen(++currentScreen);
//       } else if (evt.keyCode === CODEKEY.LEFT_ARROW) {
//         evt.preventDefault();
//         showScreen(--currentScreen);
//       }
//     }
//   };

//   document.addEventListener(`keydown`, keydownHandler);
// })();
