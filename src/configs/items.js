import variables from '../global/variables';
import { load } from '../utils/saveSystem';
import itemsEn from './items/items_en';
import itemsRu from './items/items_ru';
import itemsBy from './items/items_by';

const langMap = {
  en: itemsEn,
  ru: itemsRu,
  by: itemsBy,
};

export default langMap[(load() && load().lang) || variables.lang];
