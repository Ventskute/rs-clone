import dictionary from '../configs/dictionary';
import { append, create } from '../utils/utils';
import loaders from '../configs/loaders';
import loaderImg from '../assets/UI/loader.png';
import variables from '../global/variables';

export default function pageLoader() {
  const loader = create('div');
  loader.classList.add('loader');

  const rand = Math.floor(Math.random() * (Object.keys(loaders).length));

  loader.style.backgroundImage = `url(${loaders[rand].img})`;

  const loaderQuote = create('p');
  loaderQuote.classList.add('loader--quote');
  loaderQuote.innerText = loaders[rand].text[variables.lang];

  const loaderSpinner = create('div');
  loaderSpinner.classList.add('loader--spinner');

  const loaderText = create('p');
  loaderText.classList.add('loader--text');
  loaderText.innerText = dictionary.LOADING;

  const loaderImage = new Image();
  loaderImage.src = loaderImg;
  loaderImage.classList.add('loader--image');

  append([loaderImage, loaderText], loaderSpinner);

  append([loaderQuote, loaderSpinner], loader);

  setTimeout(() => {
    loader.classList.add('fade');
    setTimeout(() => {
      loader.remove();
      variables.isGameInProgress = true;
    }, 150);
  }, 4000);

  return loader;
}
