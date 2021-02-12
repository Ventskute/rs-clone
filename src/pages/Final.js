import {
  $, append, create, fadeRoot,
} from '../utils/utils';
import variables from '../global/variables';
import dictionary from '../configs/dictionary';

import Menu from './Menu';

import dialogueUI from '../components/UI/dialogueUI';

import outro from '../assets/final/outro.mp4';
import logoEn from '../assets/UI/logo_en.png';
import logoRu from '../assets/UI/logo_ru.png';
import logo1 from '../assets/UI/rsschool.png';
import logo2 from '../assets/UI/logo_rs2.svg';
import logo3 from '../assets/UI/epam.png';

const logoMap = {
  en: logoEn,
  ru: logoRu,
  by: logoEn,
};

function createCredits() {
  const creditsWrapper = create('div');
  creditsWrapper.classList.add('credits');

  const credits = create('div');
  credits.classList.add('credits--content');

  const logo = new Image();
  logo.classList.add('logo-main');
  logo.src = logoMap[variables.lang];

  const devs = [dictionary.DEVELOPER1, dictionary.DEVELOPER2];

  const developers = create('h3');
  developers.innerText = dictionary.DEVELOPERS;

  append([logo, developers], credits);

  devs.forEach((dev) => {
    const developer = create('p');
    developer.innerText = dev;

    credits.appendChild(developer);
  });

  const mentorTitle = create('h3');
  mentorTitle.innerText = dictionary.MENTOR_TITLE;

  const mentor = create('p');
  mentor.innerText = dictionary.MENTOR;

  const message = create('div');
  message.innerHTML = dictionary.DISCLAIMER_MESSAGE;

  const images = create('div');
  images.classList.add('images-wrapper');
  [logo1, logo2, logo3].forEach((el) => {
    const img = new Image();
    img.src = el;
    img.classList.add('logo');

    images.appendChild(img);
  });

  append([mentorTitle, mentor, message, images], credits);

  creditsWrapper.appendChild(credits);

  return creditsWrapper;
}

export default function Final() {
  const final = create('div');
  final.classList.add('final');

  const video = create('video');
  video.classList.add('final--video');
  video.src = outro;
  video.autoplay = true;
  video.controls = false;

  if (variables.music === '0') {
    video.muted = true;
  }

  video.oncanplay = () => {
    video.play();
  };

  const credits = createCredits();

  video.onended = () => {
    dialogueUI(() => {
      fadeRoot(() => {
        credits.classList.add('playing');

        credits.ontransitionend = () => {
          fadeRoot(() => {
            $('#root').innerHTML = '';
            $('#root').appendChild(Menu());
          });
        };
      });
    }, 'final');
  };

  $('#root').appendChild(credits);
  final.appendChild(video);
  return final;
}
