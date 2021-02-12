import Konva from 'konva';
import { updateTable, updateMoves } from '../components/UI/playUI';
import popup from '../components/popup';
import dialogueUI from '../components/UI/dialogueUI';
import { $, fadeRoot } from '../utils/utils';
import levels from '../configs/levels';
import variables from '../global/variables';
import Final from './Final';
import nextImg from '../assets/UI/next.png';
import dictionary from '../configs/dictionary';
import { save } from '../utils/saveSystem';
import Map from './Map';
import { playSoundEffect, soundbank, stopMainMusic } from '../utils/music';

const canvasOptions = {
  width: window.innerWidth,
  height: (window.innerWidth * 9) / 16,
};

export default function Level(config, i) {
  const {
    items, background, time, move,
  } = config;

  let count = move;

  function findAttempt() {
    count -= 1;
    updateMoves(count);
    if (count === 0) {
      popup({
        title: dictionary.LOST_MESSAGE_MOVES,
      });
    }
  }

  const levelItems = [...items];
  const stage = new Konva.Stage({
    container: 'root',
    width: canvasOptions.width,
    height: canvasOptions.height,
  });

  const resizer = () => {
    stage.width(window.innerWidth);
    stage.height((window.innerWidth * 9) / 16);
    const scaleX = stage.width() / 1920;
    const scaleY = stage.height() / 1080;
    stage.scaleX(scaleX);
    stage.scaleY(scaleY);
    stage.batchDraw();
  };

  resizer();

  window.onresize = resizer;

  const bgLayer = new Konva.Layer();
  const itemsLayer = new Konva.Layer();

  stage.add(bgLayer);
  stage.add(itemsLayer);

  if (variables.childMode) {
    stage.on('click', () => {
      findAttempt();
    });
  }

  Konva.Image.fromURL(background, (bg) => {
    bg.setAttrs({
      x: 0,
      y: 0,
      width: 1920,
      height: 1080,
    });

    bgLayer.add(bg);
    bgLayer.batchDraw();

    levelItems.forEach((img) => {
      Konva.Image.fromURL(img.image, (item) => {
        item.setAttrs({
          x: img.pos.x,
          y: img.pos.y,
          width: img.size.width,
          height: img.size.height,
          offset: {
            x: img.size.width / 2,
            y: img.size.height / 2,
          },
        });

        item.rotate(img.pos.r);

        const actionHandler = () => {
          const i = levelItems.findIndex((el) => el.name === img.name);
          levelItems.splice(i, 1);

          item.destroy();

          itemsLayer.batchDraw();

          updateTable(levelItems);

          if (levelItems.length === 0 || (img.isKey === true && variables.childMode)) {
            const nextLevel = variables.currentLevel + 1;

            if (levels[nextLevel]) {
              if (variables.lastLevel < nextLevel) {
                variables.lastLevel = nextLevel;
                save({
                  lastLevel: nextLevel,
                });
              }

              playSoundEffect(soundbank.win);

              popup({
                title: dictionary.LEVEL_WON_TITLE,
                buttonText: dictionary.NEXT_LEVEL,
                image: nextImg,
                callback: () => {
                  fadeRoot(() => {
                    $('#root').innerHTML = '';
                    $('#root').appendChild(Map());
                  }, false);
                },
              });
            } else {
              stopMainMusic();

              fadeRoot(() => {
                $('#root').innerHTML = '';
                $('#root').appendChild(Final());
              });
            }

            clearInterval(variables.timerId);
          }

          if (variables.childMode) {
            findAttempt();
          }
        };

        item.on('click', actionHandler);
        item.on('tap', actionHandler);

        itemsLayer.add(item);
        itemsLayer.batchDraw();

        img.imageItem = item;
      });
    });
  });

  dialogueUI({
    levelItems, move, time, itemsLayer,
  });

  window.history.replaceState({}, 'Level', `/level?lvl=${variables.currentLevel}`);
}
