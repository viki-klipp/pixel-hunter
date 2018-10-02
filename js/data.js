const MAX_QUESTIONS = 3;
const MAX_LIVES = 3;
const TIME = 30;

export const initialState = Object.freeze({
  results: new Array(MAX_QUESTIONS).fill(`unknow`),
  level: `level-1`,
  lives: MAX_LIVES,
  question: MAX_QUESTIONS,
  time: TIME
});

export const levels = Object.freeze({
  'level-1': {
    description: `Угадайте для каждого изображения фото или рисунок?`,
    next: `level-2`
  },
  'level-2': {
    description: `Угадай, фото или рисунок?`,
    next: `level-3`
  },
  'level-3': {
    description: `Найдите рисунок среди изображений`,
    next: `level-0`
  }
});

export const statsResultList = {
  wrong: `stats__result--wrong`,
  slow: `stats__result--slow`,
  fast: `stats__result--fast`,
  correct: `stats__result--correct`,
  unknow: `stats__result--unknown`
};

export const imageList = {
  photos: [
    `http://i.imgur.com/1KegWPz.jpg`,
    `https://i.imgur.com/DiHM5Zb.jpg`,
    `http://i.imgur.com/DKR1HtB.jpg`
  ],
  paintigs: [
    `https://k42.kn3.net/CF42609C8.jpg`,
    `https://k42.kn3.net/D2F0370D6.jpg`,
    `https://k32.kn3.net/5C7060EC5.jpg`
  ]
};
