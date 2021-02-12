import menu from '../assets/sounds/menu.mp3';
import main from '../assets/sounds/main2.mp3';
import loader from '../assets/sounds/loader.mp3';
import hover from '../assets/sounds/hover.wav';
import hint from '../assets/sounds/hint.mp3';
import news from '../assets/sounds/news.mp3';
import victory from '../assets/sounds/victory.wav';
import whoosh from '../assets/sounds/whoosh.mp3';

import { save } from './saveSystem';
import variables from '../global/variables';

export const soundbank = {
  loader,
  hover,
  hint,
  win: news,
  victory,
  map: whoosh,
};

export const musicbank = {
  menu: new Audio(menu),
  main: new Audio(main),
};

export function playMenuMusic() {
  if (musicbank.main.paused || musicbank.menu.paused) {
    musicbank.main.play();

    musicbank.main.onended = () => {
      musicbank.menu.play();

      musicbank.menu.onended = () => {
        musicbank.main.play();
      };
    };
  }
}

export function stopMainMusic() {
  Object.values(musicbank).forEach((el) => el.pause());
}

export function playSoundEffect(effect) {
  const audio = new Audio(effect);
  audio.volume = variables.sounds;
  audio.play();
}

export function changeMusicVolume(value) {
  const bank = Object.values(musicbank);

  for (let i = 0; i < bank.length; i += 1) {
    bank[i].volume = value;
  }

  if (bank.every((el) => el.paused)) {
    playMenuMusic();
  }

  variables.music = value;

  save({
    music: value,
  });
}

export function changeSoundsVolume(value) {
  variables.sounds = value;

  save({
    sounds: value,
  });
}
