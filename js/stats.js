import {statsResultList} from './data';

export default (resultList = []) => {
  const html = `<div class="stats">
    <ul class="stats">
      ${resultList.map((el) => `<li class="stats__result ${statsResultList[el]}"></li>`)}
    </ul>
    </div>`;

  return html;
};
