import variables from '../global/variables';

export function save(data = {}) {
  const savedGame = JSON.parse(localStorage.getItem('game save 1'));
  const newData = { ...savedGame, ...data };
  localStorage.setItem('game save 1', JSON.stringify(newData));
}

export function load() {
  return JSON.parse(localStorage.getItem('game save 1'));
}

export function setDefault() {
  save({
    music: '1',
    sounds: '1',
    childMode: false,
    lang: 'ru',
    isDialogFinished: false,
    currentLevel: 0,
    lastLevel: 0,
  });
}

export function parseSave() {
  const saveData = load();
  Object.keys(saveData).forEach((key) => {
    variables[key] = saveData[key];
  });
}
