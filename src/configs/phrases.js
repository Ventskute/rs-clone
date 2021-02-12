import variables from '../global/variables';
import { load } from '../utils/saveSystem';
import phrases_en from './phrases/phrases_en';
import phrases_ru from './phrases/phrases_ru';
import phrases_by from './phrases/phrases_by';

const langMap = {
  en: phrases_en,
  ru: phrases_ru,
  by: phrases_by,
};

export default langMap[(load() && load().lang) || variables.lang];
