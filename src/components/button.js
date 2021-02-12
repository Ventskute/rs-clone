import { playSoundEffect, soundbank } from '../utils/music';
import { create } from '../utils/utils';

export default function button(text, callback, mod = null, withoutSound = false) {
  const buttonEl = create('button');
  buttonEl.classList.add('button');
  buttonEl.title = text;

  !withoutSound && (buttonEl.onmouseenter = () => playSoundEffect(soundbank.hover));

  if (mod) {
    buttonEl.classList.add(`button_${mod}`);
  }

  buttonEl.textContent = text;

  buttonEl.onclick = callback;

  return buttonEl;
}
