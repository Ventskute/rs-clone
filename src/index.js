import { $, append } from './utils/utils';
import { load, parseSave, setDefault } from './utils/saveSystem';
import createGlobalListeners from './global/listeners';
import Menu from './pages/Menu';
import disclaimer from './components/disclaimer';

import './index.scss';

if (!load()) {
  setDefault();
}

parseSave();

createGlobalListeners();

append([
  Menu(),
  disclaimer(),
], $('#root'));
