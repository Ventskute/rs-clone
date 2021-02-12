import { create, append, $ } from '../utils/utils';
import { playUI } from './UI/playUI';

export default function dialog(config, options) {
  let currentPhrase = 0;

  if (!config) {
    playUI(options);
    return;
  }

  const {
    img, title, text, answer,
  } = config[currentPhrase];

  const blur = create('div');
  blur.classList.add('dialog-blur');

  const wrapper = create('div');
  wrapper.classList.add('dialog-wrapper');

  const avatar = create('div');
  avatar.classList.add('dialog-avatar');

  const avatarImg = create('img');
  avatarImg.src = img;
  avatar.appendChild(avatarImg);

  const speech = create('div');
  speech.classList.add('dialog-speech');

  const name = create('h3');
  name.classList.add('dialog-speech--name');
  name.innerText = title;

  const phrase = create('p');
  phrase.classList.add('dialog-speech--text');
  phrase.innerText = text;

  const button = create('button');
  button.classList.add('dialog-speech--button');
  button.innerText = answer;

  const actionHandler = () => {
    currentPhrase++;

    if (config[currentPhrase]) {
      avatarImg.src = config[currentPhrase].img;
      name.innerText = config[currentPhrase].title;
      phrase.innerText = config[currentPhrase].text;
      button.innerText = config[currentPhrase].answer;
    } else {
      wrapper.remove();
      blur.remove();

      if (typeof options === 'function') {
        options();
      } else playUI(options);
    }
  };

  button.onclick = actionHandler;

  $('#root').appendChild(blur);
  append([name, phrase], speech);
  append([avatar, speech, button], wrapper);

  return wrapper;
}
