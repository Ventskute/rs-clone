import table from '../table';
import { $ } from '../../utils/utils';
import timer from '../timer';
import hint from '../hint';
import variables from '../../global/variables';
import moves from '../moves';
import pauseGame from '../pauseGame';

let tableEl = null;
let countMove = null;
export function playUI({
  levelItems, move, time, itemsLayer,
}) {
  tableEl = $('#root').appendChild(table(levelItems));

  if (variables.childMode) {
    countMove = $('#root').appendChild(moves(move));
  } else {
    $('#root').appendChild(timer(time));
  }

  $('#root').appendChild(hint(itemsLayer));

  $('#root').appendChild(pauseGame());
}

export function updateTable(newItems) {
  tableEl.remove();
  tableEl = $('#root').appendChild(table(newItems));
}

export function updateMoves(newMove) {
  countMove.remove();
  countMove = $('#root').appendChild(moves(newMove));
}
