import getGroupAnswers from './game-answer';

export default (img, alt, width, height, answerGroupName = false) => {
  const html = `<div class="game__option">
    <img src="${img}" alt="${alt}" width="${width}" height="${height}">
    ${answerGroupName ? getGroupAnswers(answerGroupName) : ``}
  </div>`;

  return html;
};
