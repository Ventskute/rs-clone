import { $, append, create } from '../utils/utils';
import dictionary from '../configs/dictionary';
import button from './button';
import github from '../assets/UI/github.svg';
import logo from '../assets/UI/rsschool.png';
import logo2 from '../assets/UI/logo_rs2.svg';
import logo3 from '../assets/UI/epam.png';
import startupModal from './startupModal';

const devs = [
  {
    link: 'https://github.com/Ventskute',
    name: dictionary.DEVELOPER1,
  },
  {
    link: 'https://github.com/TatsianaSlapik',
    name: dictionary.DEVELOPER2,
  },
];

const ment = {
  link: 'https://github.com/mikitaliaukovich',
  name: dictionary.MENTOR,
};

export default function disclaimer() {
  const modal = create('div');
  modal.classList.add('modal', 'disclaimer');

  const modalContent = create('div');
  modalContent.classList.add('modal--content');

  const title = create('h2');
  title.innerText = dictionary.DISCLAIMER_TITLE;

  const developers = create('h3');
  developers.innerText = dictionary.DEVELOPERS;

  append([title, developers], modalContent);

  devs.forEach((dev) => {
    const developer = create('p');
    developer.innerText = dev.name;

    const img = new Image();
    img.src = github;
    img.classList.add('link--image');

    const githubLink = create('a');
    githubLink.href = dev.link;
    githubLink.target = '_blank';
    githubLink.appendChild(img);

    developer.appendChild(githubLink);

    modalContent.appendChild(developer);
  });

  const mentorTitle = create('h3');
  mentorTitle.innerText = dictionary.MENTOR_TITLE;

  const mentor = create('p');
  mentor.innerText = ment.name;

  const img = new Image();
  img.src = github;
  img.classList.add('link--image');

  const githubLink = create('a');
  githubLink.href = ment.link;
  githubLink.target = '_blank';
  githubLink.appendChild(img);

  mentor.appendChild(githubLink);

  const message = create('div');
  message.innerHTML = dictionary.DISCLAIMER_MESSAGE;

  const images = create('div');
  images.classList.add('images-wrapper');
  [logo, logo2, logo3].forEach((el) => {
    const img = new Image();
    img.src = el;
    img.classList.add('logo');

    images.appendChild(img);
  });

  const agreeButton = button(dictionary.DISCLAIMER_AGREE, () => {
    $('#root').appendChild(startupModal());

    modal.classList.add('fade');
    setTimeout(() => modal.remove(), 150);
  }, 'accept', true);

  append([mentorTitle, mentor, message, images, agreeButton], modalContent);
  modal.appendChild(modalContent);

  return modal;
}
