import Konva from 'konva';
import { playUI, updateTable, updateMoves } from '../components/UI/playUI';
import { $ } from '../utils/utils';
import levels from '../configs/levels';
import variables from '../global/variables';
import popup from '../components/popup';
import Won from '../assets/popup/won.gif';
import Final from './Final';
import Lost from '../assets/popup/lost.gif';
import dialogueUI from '../components/UI/dialogueUI';

const canvasOptions = {
  width: window.innerWidth,
  height: window.innerHeight,
};

export default function Level(config) {
  const {
    items, background, time, move,
  } = config;

  let count = move;

  function findAttempt() {
    count -= 1;
    updateMoves(count);
    if (count === 0) {
      popup({
        title: 'Game away!',
        buttonText: 'New Game',
        image: Lost,
      });
    }
  }

  let levelItems = items;
  const stage = new Konva.Stage({
    container: 'root',
    width: canvasOptions.width,
    height: canvasOptions.height,
  });

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
      width: canvasOptions.width,
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

        item.on('click', () => {
          levelItems = levelItems.filter((el) => el.name !== img.name);

          item.destroy();

          itemsLayer.batchDraw();

          updateTable(levelItems);

          if (levelItems.length === 0 || (img.isKey === true && variables.childMode)) {
            const nextLevel = variables.currentLevel + 1;

            if (levels[nextLevel]) {
              popup({
                title: 'You won!',
                buttonText: 'Next level',
                image: Won,
                callback: () => {
                  $('#root').innerHTML = '';
                  Level(levels[nextLevel]);
                },
              });
            } else {
              $('#root').innerHTML = '';
              $('#root').appendChild(Final());
            }

            clearInterval(variables.timerId);
          }

          if (variables.childMode) {
            findAttempt();
          }
        });

        itemsLayer.add(item);
        itemsLayer.batchDraw();

        img.imageItem = item;
      });
    });
  });

  dialogueUI({
    levelItems, move, time, itemsLayer,
  });

  variables.isGameInProgress = true;
}
