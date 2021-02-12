import optionsPopup from '../components/optionsPopup';
import {
  $, append, create, fadeRoot,
} from '../utils/utils';
import Map from './Map';
import dictionary from '../configs/dictionary';
import { save } from '../utils/saveSystem';
import variables from '../global/variables';

import logoEn from '../assets/UI/logo_en.png';
import logoRu from '../assets/UI/logo_ru.png';
import { playSoundEffect, soundbank } from '../utils/music';

const logoMap = {
  en: logoEn,
  ru: logoRu,
  by: logoEn,
};

const menuConfig = {
  CONTINUE: dictionary.CONTINUE,
  NEW_GAME: dictionary.NEW_GAME,
  OPTIONS: dictionary.OPTIONS,
  EXIT: dictionary.EXIT,
};

export default function Menu() {
  const menuWrapper = create('div');
  menuWrapper.classList.add('menu');

  const logo = new Image();
  logo.classList.add('logo');
  logo.src = logoMap[variables.lang];

  const nav = create('nav');
  const ul = create('ul');

  const version = create('p');
  version.classList.add('version');
  version.innerText = `v ${variables.version}`;

  append([logo, ul, version], nav);

  Object.values(menuConfig).forEach((el) => {
    const li = create('li');

    if (el === menuConfig.CONTINUE && variables.lastLevel === 0) {
      li.classList.add('disabled');
    }

    li.onmouseenter = () => playSoundEffect(soundbank.hover);

    li.innerText = el;
    ul.appendChild(li);
  });

  nav.addEventListener('click', (e) => {
    switch (e.target.textContent) {
    case menuConfig.NEW_GAME: {
      fadeRoot(() => {
        $('#root').innerHTML = '';
        $('#root').appendChild(Map());
      }, false);

      playSoundEffect(soundbank.map);

      save({
        lastLevel: 0,
        isDialogFinished: false,
      });

      variables.lastLevel = 0;
      variables.isDialogFinished = false;

      break;
    }
    case menuConfig.CONTINUE: {
      fadeRoot(() => {
        $('#root').innerHTML = '';
        $('#root').appendChild(Map());
      }, false);

      playSoundEffect(soundbank.map);

      break;
    }
    case menuConfig.OPTIONS: {
      $('#root').appendChild(optionsPopup());
      break;
    }
    case menuConfig.EXIT: {
      window.close();
      break;
    }
    default: break;
    }
  });

  menuWrapper.appendChild(nav);

  window.history.replaceState({}, 'RS Clone', '/');

  return menuWrapper;
}
