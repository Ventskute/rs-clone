import { $, create } from '../utils/utils';
import popup from './popup';
import variables from '../global/variables';
import dictionary from '../configs/dictionary';

let lastRemainTime = {};

function getRemainTime(endTime) {
  const total = Date.parse(endTime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);

  return {
    total,
    minutes,
    seconds,
  };
}

function createTimer(parent, time) {
  `0${time.minutes}`.split('').forEach((i) => {
    const span = create('span');
    span.classList.add('timer--count');
    span.innerText = i;
    parent.appendChild(span);
  });

  const span = create('span');
  span.classList.add('timer--count_divider');
  span.innerText = ':';
  parent.appendChild(span);

  `0${time.seconds}`.slice(-2).split('').forEach((i) => {
    const span = create('span');
    span.classList.add('timer--count');
    span.innerText = i;
    parent.appendChild(span);
  });
}

export default function timer(sec) {
  let endTime = new Date(Date.parse(new Date()) + sec * 1000);

  const time = create('div');
  time.classList.add('timer');
  time.id = 'timer';

  let timerId;

  function updateTime() {
    if (variables.isGameInProgress) {
      time.innerHTML = '';
      const t = getRemainTime(endTime);
      lastRemainTime = t;

      if (t.total <= 0) {
        clearInterval(timerId);
        time.remove();

        popup({
          title: dictionary.LOST_MESSAGE,
        });
      }

      createTimer(time, t);
    } else {
      endTime = new Date(Date.parse(new Date())
        + ((lastRemainTime.minutes * 60 === 0 ? 1 : lastRemainTime.minutes * 60)
        + lastRemainTime.seconds) * 1000);
    }
  }

  updateTime();

  timerId = setInterval(updateTime, 1000);
  variables.timerId = timerId;

  return time;
}
