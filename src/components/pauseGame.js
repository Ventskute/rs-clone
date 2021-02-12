import { create } from '../utils/utils';
import popup from './popup';
import playImg from '../assets/UI/play.png';
import variables from '../global/variables';
import dictionary from '../configs/dictionary';
import button from './button';

export default function pauseGame() {
  const pause = button(dictionary.PAUSE, () => {
    popup({
      title: dictionary.PAUSE_MESSAGE,
      buttonText: dictionary.CONTINUE,
      image: playImg,
      callback: () => {
        variables.isGameInProgress = !variables.isGameInProgress;
      },
    });
    variables.isGameInProgress = !variables.isGameInProgress;
  }, 'pause');

  return pause;
}
