import dictionary from '../configs/dictionary';
import levels from '../configs/levels';
import variables from '../global/variables';
import Level from '../pages/Level';
import Menu from '../pages/Menu';
import {
  $, append, create, fadeRoot,
} from '../utils/utils';
import optionsPopup from './optionsPopup';

import restartImg from '../assets/UI/restart.png';
import optionsImg from '../assets/UI/settings.png';
import menuImg from '../assets/UI/menu.png';
import exitImg from '../assets/UI/exit.png';

const popupButtons = {
  RESTART: {
    text: dictionary.RESTART,
    img: restartImg,
  },
  OPTIONS: {
    text: dictionary.OPTIONS,
    img: optionsImg,
  },
  CUSTOM: null,
  MENU: {
    text: dictionary.MENU,
    img: menuImg,
  },
  EXIT: {
    text: dictionary.EXIT,
    img: exitImg,
  },
};

export default function popup({
  title, buttonText = null, image = null, callback,
}) {
  const pagePopup = create('div');
  pagePopup.classList.add('popup', 'fade');

  setTimeout(() => pagePopup.classList.remove('fade'), 0);

  if (title) {
    const popupText = create('h2');
    popupText.classList.add('popup--text');
    popupText.innerText = title;
    pagePopup.appendChild(popupText);
  }

  const popupContent = create('div');
  popupContent.classList.add('popup--content');

  if (buttonText) {
    popupButtons.CUSTOM = {
      text: buttonText,
      img: image,
    };
  }

  Object.values(popupButtons).forEach((el) => {
    if (el) {
      const card = create('button');
      card.classList.add('popup--card');

      const img = new Image();
      img.src = el.img;

      const label = create('p');
      card.innerText = el.text;

      append([img], card);
      popupContent.appendChild(card);
    }
  });

  popupContent.addEventListener('click', (e) => {
    switch (e.target.textContent) {
    case popupButtons.MENU.text: {
      fadeRoot(() => {
        $('#root').innerHTML = '';
        $('#root').appendChild(Menu());
      });
      break;
    }
    case popupButtons.OPTIONS.text: {
      $('#root').appendChild(optionsPopup());
      break;
    }
    case popupButtons.RESTART.text: {
      fadeRoot(() => {
        $('#root').removeChild(pagePopup);
        $('#root').innerHTML = '';
        Level(levels[variables.currentLevel]);
        variables.isGameInProgress = true;
      });
      break;
    }
    case popupButtons.EXIT.text: {
      window.close();
      break;
    }
    case buttonText: {
      pagePopup.classList.add('fade');
      pagePopup.ontransitionend = () => pagePopup.remove();
      callback();
      break;
    }
    }
  });

  const keyHandler = (e) => {
    if (e.key === 'Escape' && buttonText) {
      pagePopup.classList.add('fade');
      pagePopup.ontransitionend = () => pagePopup.remove();
      callback();
    }

    document.removeEventListener('keydown', keyHandler);
  };

  document.addEventListener('keydown', keyHandler);

  pagePopup.appendChild(popupContent);

  $('#root').appendChild(pagePopup);
}
