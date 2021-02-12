import Konva from 'konva';
import dictionary from '../configs/dictionary';
import { playSoundEffect, soundbank } from '../utils/music';
import { $, create } from '../utils/utils';
import button from './button';

export default function hint(itemsLayer) {
  const hintBtn = button(dictionary.HINT, () => {
    if (itemsLayer.children.length > 0) {
      playSoundEffect(soundbank.hint);

      const angularSpeed = 90;

      const anim = new Konva.Animation((frame) => {
        const angleDiff = (frame.timeDiff * angularSpeed) / 1000;

        itemsLayer.children[0].rotate(angleDiff);
      }, itemsLayer);

      anim.start();

      itemsLayer.children[0].on('click', () => {
        anim.stop();
      });
    }
  }, 'hint');

  return hintBtn;
}
