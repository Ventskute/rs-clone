import variables from '../global/variables';
import { $, create } from '../utils/utils';
import { load, save } from '../utils/saveSystem';

export default function mode(paramName, callback) {
  const checkboxMode = create('div');
  checkboxMode.classList.add('checkboxMode');

  const checkbox = create('input');
  checkbox.id = `checkbox-${paramName}`;
  checkbox.classList.add('checkbox');
  checkbox.type = 'checkbox';

  checkbox.checked = variables[paramName];

  const checkboxLabel = create('label');
  checkboxLabel.htmlFor = `${checkbox.id}`;
  checkboxLabel.classList.add('checkbox__label');

  checkboxMode.appendChild(checkbox);
  checkboxMode.appendChild(checkboxLabel);

  checkbox.addEventListener('click', () => {
    callback();
  });

  return checkboxMode;
}
