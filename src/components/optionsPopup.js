import { create, append, $, fadeRoot } from '../utils/utils';
import musicIcon from '../assets/UI/music.png';
import soundsIcon from '../assets/UI/sounds.png';
import { changeMusicVolume, changeSoundsVolume } from '../utils/music';
import { load, save } from '../utils/saveSystem';
import mode from './mode';
import variables from '../global/variables';
import dictionary from '../configs/dictionary';
import Level from '../pages/Level';
import levels from '../configs/levels';

function createSoundsOptions(name, icon, callback) {
  const soundsOptions = create('div');
  soundsOptions.classList.add('options--item');

  const sounds = new Image(32, 32);
  sounds.src = icon;

  const input = create('input');
  input.type = 'range';
  input.min = '0';
  input.max = '1';
  input.step = '0.1';
  input.defaultValue = load()[name];

  soundsOptions.appendChild(sounds);
  soundsOptions.appendChild(input);

  sounds.onclick = () => {
    soundsOptions.classList.toggle('disabled');

    if (soundsOptions.classList.contains('disabled')) {
      input.value = '0';
      callback('0');
    } else {
      input.value = '1';
      callback('1');
    }
  };

  input.onchange = (e) => {
    if (e.target.value === '0' && !soundsOptions.classList.contains('disabled')) {
      sounds.click();
    } else if (soundsOptions.classList.contains('disabled')) {
      soundsOptions.classList.toggle('disabled');
      callback(e.target.value);
    } else {
      callback(e.target.value);
    }
  };

  callback(input.defaultValue);
  if (input.defaultValue === '0') sounds.click();

  return soundsOptions;
}

function createChildModeOption() {
  const childModeOptions = create('div');
  childModeOptions.classList.add('options--item');

  const childModeText = create('p');
  childModeText.innerText = dictionary.OPTIONS_CHILD_MODE;

  append([childModeText, mode('childMode', () => {
    variables.childMode = !variables.childMode;

    if ($('.konvajs-content')) {
      fadeRoot(() => {
        Level(levels[variables.currentLevel]);
      })
    }

    save({
      childMode: variables.childMode,
    });
  })], childModeOptions);

  return childModeOptions;
}

function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else if (document.exitFullscreen) {
    document.exitFullscreen();
  }
}

function createFullscreenOption() {
  const fullScreenOption = create('div');
  fullScreenOption.classList.add('options--item');

  const fullScreenText = create('p');
  fullScreenText.innerText = dictionary.OPTIONS_FULLSCREEN;

  append([fullScreenText, mode('fullscreen', toggleFullScreen)], fullScreenOption);

  return fullScreenOption;
}

function createLanguageSelector() {
  const languageOption = create('div');
  languageOption.classList.add('options--item');

  const languageText = create('p');
  languageText.innerText = dictionary.LANGUAGE;

  const select = create('select');
  select.classList.add('select');

  ['en', 'ru', 'by'].forEach((el) => {
    const option = create('option');
    option.value = el;
    option.innerText = dictionary[`LANG_${el.toUpperCase()}`];

    if (el === variables.lang) option.selected = true;

    select.appendChild(option);
  });

  select.onchange = (e) => {
    variables.lang = e.target.value;
    save({
      lang: e.target.value,
    });
    document.location.reload();
  };

  append([languageText, select], languageOption);

  return languageOption;
}

export default function optionsPopup() {
  const options = create('div');
  options.classList.add('options', 'modal');

  const optionsContent = create('div');
  optionsContent.classList.add('options--content', 'modal--content');
  options.appendChild(optionsContent);

  const title = create('h2');
  title.innerText = dictionary.OPTIONS_TITLE;

  const cross = create('div');
  cross.classList.add('close-cross');

  append([
    cross,
    title,
    createSoundsOptions('music', musicIcon, changeMusicVolume),
    createSoundsOptions('sounds', soundsIcon, changeSoundsVolume),
    createChildModeOption(),
    createFullscreenOption(),
    createLanguageSelector(),
  ], optionsContent);

  options.onclick = (e) => {
    if (e.target.className === options.className) {
      options.classList.add('fade');
      setTimeout(() => options.remove(), 150);
    }
  };

  cross.onclick = () => {
    options.classList.add('fade');
    setTimeout(() => options.remove(), 150);
  };

  return options;
}
