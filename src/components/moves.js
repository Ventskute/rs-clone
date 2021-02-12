import { $, create } from '../utils/utils';

export default function moves(count) {
  const move = create('div');
  move.classList.add('timer');

  String(count).split('').forEach((num) => {
    const countMove = create('span');
    countMove.classList.add(('timer--count'));
    countMove.innerText = num;
    move.appendChild(countMove);
  });

  return move;
}
