import variables from '../global/variables';
import { load } from '../utils/saveSystem';
import dict_en from './dicts/dict_en';
import dict_ru from './dicts/dict_ru';
import dict_by from './dicts/dict_by';

const langMap = {
  en: dict_en,
  ru: dict_ru,
  by: dict_by,
};

export default langMap[(load() && load().lang) || variables.lang];
