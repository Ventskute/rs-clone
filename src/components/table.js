import variables from '../global/variables';
import { create } from '../utils/utils';

export default function table(items) {
  const tableEl = create('div');
  tableEl.classList.add('table');

  const listItems = create('ul');

  items.forEach((item) => {
    const liItem = create('li');
    if (variables.childMode && item.isKey) {
      liItem.classList.add('key');
    }
    liItem.innerText = item.name;
    listItems.appendChild(liItem);
  });

  tableEl.appendChild(listItems);

  return tableEl;
}
