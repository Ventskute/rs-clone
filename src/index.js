import './index.scss';
import { $ } from './utils/utils';
import Menu from './pages/Menu';
import Level from './pages/Level';
import config from './configs/levels';
import startupModal from './components/startupModal';

$('#root').appendChild(Menu());
$('#root').appendChild(startupModal());
// Level(config[0]);
