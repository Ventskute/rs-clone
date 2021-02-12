import { $ } from '../utils/utils';
import variables from './variables';

export default function createGlobalListeners() {
  const query = matchMedia('all and (display-mode: fullscreen');

  query.onchange = (e) => {
    variables.fullscreen = query.matches;

    const checkbox = $('#checkbox-fullscreen');
    checkbox && (checkbox.checked = query.matches);
  };
}
