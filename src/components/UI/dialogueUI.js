import phrases from '../../configs/phrases';
import variables from '../../global/variables';
import { $ } from '../../utils/utils';
import dialog from '../dialog';

export default function dialogueUI(options, phrase) {
  const config = phrases[phrase || variables.currentLevel];

  const dialogWrapper = dialog(config, options);
  dialogWrapper && $('#root').appendChild(dialogWrapper);
}
