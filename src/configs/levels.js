import levelOne from '../assets/backgrounds/1.png';
import Basket from '../assets/items/basket.png';
import Brush from '../assets/items/brush.png';
import Egg from '../assets/items/egg.png';
import Palette from '../assets/items/palette.png';
import Flowers from '../assets/items/flowers.png';
import Turtle from '../assets/items/turtle.png';
import Chick from '../assets/items/chick.png';
import Medallion from '../assets/items/medallion.png';

import levelTwo from '../assets/backgrounds/2.jpg';
import Bucket from '../assets/items/bucket.png';
import Unicorn from '../assets/items/unicorn1.png';
import Plane from '../assets/items/plane.png';
import Shovel from '../assets/items/shovel.png';
import Candle from '../assets/items/candle.png';
import Book from '../assets/items/book.png';
import Envelope from '../assets/items/envelope.png';
import Clock from '../assets/items/clock.png';

import levelThree from '../assets/backgrounds/3.jpg';
import Box from '../assets/items/box.png';
import Fairy from '../assets/items/fairy.png';
import Rainbow from '../assets/items/rainbow.png';
import Tooth from '../assets/items/tooth.png';
import Toothbrush from '../assets/items/toothbrush.png';
import Coin from '../assets/items/coin.png';
import Butterfly from '../assets/items/butterfly.png';
import Cloud from '../assets/items/cloud.png';

import levelFour from '../assets/backgrounds/4.jpg';
import Beret from '../assets/items/beret.png';
import Stick from '../assets/items/staff.png';
import Ice from '../assets/items/ice.png';
import Lock from '../assets/items/lock.png';
import Fireworks from '../assets/items/fireworks.png';
import Snowflake from '../assets/items/snowflake.png';
import Snowball from '../assets/items/snowball.png';
import Moon from '../assets/items/moon.png';
import Skates from '../assets/items/skates.png';

import levelFive from '../assets/backgrounds/5.jpg';
import Elf from '../assets/items/elf.png';
import Robot from '../assets/items/robot.png';
import Lollipop from '../assets/items/lollipop.png';
import Matryoshka from '../assets/items/matryoshka.png';
import Sock from '../assets/items/sock.png';
import Snowman from '../assets/items/snowman.png';
import Wreath from '../assets/items/wreath.png';
import Star from '../assets/items/star.png';
import GingerbreadMan from '../assets/items/gingerbread-man.png';
import SantaHat from '../assets/items/santa_hat.png';
import Yeti from '../assets/items/yeti.png';
import Earth from '../assets/items/Earth.png';

import levelSix from '../assets/backgrounds/6.jpg';
import Nightmare from '../assets/items/nightmare.png';

import levelSeven from '../assets/backgrounds/7.jpg';
import Santa from '../assets/items/Santa.png';
import IceJack from '../assets/items/IceJack.png';
import EasterBunny from '../assets/items/Easter_Bunny.png';
import Sandman from '../assets/items/Sandman.png';
import Boogeyman from '../assets/items/Boogeyman.png';
import ToothFairyHelper from '../assets/items/tooth_fairy_helper.png';
import ToothFairy from '../assets/items/tooth_Fairy.png';
import Yeti1 from '../assets/items/Yeti1.png';
import Egg1 from '../assets/items/egg1.png';
import Deer from '../assets/items/Deer1.png';
import Elf2 from '../assets/items/elf2.png';

import itemsDict from './items';

export default {
  0: {
    items: [
      {
        name: itemsDict.TURTLE,
        image: Turtle,

        size: {
          width: 36,
          height: 40,
        },

        pos: {
          x: 725,
          y: 750,
          r: 45,
        },
      },
      {
        name: itemsDict.FLOWERS,
        image: Flowers,
        size: {
          width: 36,
          height: 32,
        },
        pos: {
          x: 525,
          y: 110,
          r: 45,
        },
      },
      {
        name: itemsDict.BRUSH,
        image: Brush,
        size: {
          width: 40,
          height: 40,
        },
        pos: {
          x: 325,
          y: 210,
          r: 45,
        },
        isKey: true,
      },
      {
        name: itemsDict.BASKET,
        image: Basket,
        size: {
          width: 40,
          height: 32,
        },
        pos: {
          x: 1110,
          y: 810,
          r: 0,
        },
      },

      {
        name: itemsDict.CHICK,
        image: Chick,
        size: {
          width: 25,
          height: 40,
        },
        pos: {
          x: 910,
          y: 410,
          r: 0,
        },
      },

      {
        name: itemsDict.EGG,
        image: Egg,
        size: {
          width: 117,
          height: 200,
        },

        pos: {
          x: 525,
          y: 430,
          r: -15,
        },
      },
      {
        name: itemsDict.PALETTE,
        image: Palette,
        size: {
          width: 58,
          height: 52,
        },
        pos: {
          x: 1500,
          y: 450,
          r: -50,
        },
      },
      {
        name: itemsDict.MEDALLION,
        image: Medallion,
        size: {
          width: 35,
          height: 40,
        },
        pos: {
          x: 1140,
          y: 120,
          r: 0,
        },
      },
    ],

    background: levelOne,
    point: {
      x: 300,
      y: 200,
    },
    time: 120,
    move: 20,
  },

  1: {
    items: [
      {
        name: itemsDict.BOOK,
        image: Book,
        size: {
          width: 50,
          height: 24,
        },
        pos: {
          x: 1725,
          y: 650,
          r: 0,
        },
      },

      {
        name: itemsDict.BUCKET,
        image: Bucket,
        size: {
          width: 70,
          height: 100,
        },
        pos: {
          x: 225,
          y: 910,
          r: 45,
        },
      },
      {
        name: itemsDict.UNICORN,
        image: Unicorn,
        size: {
          width: 50,
          height: 40,
        },

        pos: {
          x: 1115,
          y: 355,
          r: 0,
        },
        isKey: true,
      },

      {
        name: itemsDict.PLANE,
        image: Plane,
        size: {
          width: 50,
          height: 30,
        },
        pos: {
          x: 1555,
          y: 230,
          r: -15,
        },
      },

      {
        name: itemsDict.SHOVEL,
        image: Shovel,
        size: {
          width: 18,
          height: 62,
        },
        pos: {
          x: 570,
          y: 400,
          r: 0,
        },
      },

      {
        name: itemsDict.CANDLE,
        image: Candle,
        size: {
          width: 22,
          height: 60,
        },
        pos: {
          x: 1850,
          y: 310,
          r: 0,
        },
      },
      {
        name: itemsDict.CLOCK,
        image: Clock,
        size: {
          width: 32,
          height: 30,
        },
        pos: {
          x: 745,
          y: 414,
          r: 0,
        },
      },
      {
        name: itemsDict.ENVELOPE,
        image: Envelope,
        size: {
          width: 62,
          height: 45,
        },
        pos: {
          x: 850,
          y: 610,
          r: 0,
        },
      },
    ],

    background: levelTwo,
    point: {
      x: 540,
      y: 300,
    },
    time: 80,
    move: 12,
  },

  2: {
    items: [
      {
        name: itemsDict.BUTTERFLY,
        image: Butterfly,
        size: {
          width: 80,
          height: 30,
        },
        pos: {
          x: 1455,
          y: 110,
          r: 45,
        },
      },
      {
        name: itemsDict.COIN,
        image: Coin,
        size: {
          width: 36,
          height: 21,
        },
        pos: {
          x: 255,
          y: 610,
          r: 45,
        },
      },
      {
        name: itemsDict.FAIRY,
        image: Fairy,
        size: {
          width: 20,
          height: 50,
        },
        pos: {
          x: 860,
          y: 590,
          r: 0,
        },
        isKey: true,
      },
      {
        name: itemsDict.RAINBOW,
        image: Rainbow,
        size: {
          width: 68,
          height: 62,
        },
        pos: {
          x: 1200,
          y: 700,
          r: 45,
        },
        isKey: false,
      },
      {
        name: itemsDict.TOOTH,
        image: Tooth,
        size: {
          width: 18,
          height: 32,
        },
        pos: {
          x: 1400,
          y: 800,
          r: 0,
        },
        isKey: false,
      },

      {
        name: itemsDict.MEMORY_BOX,
        image: Box,
        size: {
          width: 30,
          height: 100,
        },
        pos: {
          x: 855,
          y: 300,
          r: 0,
        },
      },
      {
        name: itemsDict.TOOTHBRUSH,
        image: Toothbrush,
        size: {
          width: 32,
          height: 68,
        },
        pos: {
          x: 536,
          y: 250,
          r: -45,
        },
      },
      {
        name: itemsDict.CLOUD,
        image: Cloud,
        size: {
          width: 100,
          height: 49,
        },
        pos: {
          x: 1746,
          y: 250,
          r: 0,
        },
      },
    ],
    background: levelThree,
    point: {
      x: 800,
      y: 435,
    },
    time: 100,
    move: 22,
  },

  3: {
    items: [
      {
        name: itemsDict.LOCK,
        image: Lock,
        size: {
          width: 36,
          height: 21,
        },
        pos: {
          x: 638,
          y: 353,
          r: -95,
        },
      },
      {
        name: itemsDict.BERET,
        image: Beret,
        size: {
          width: 36,
          height: 21,
        },
        pos: {
          x: 113,
          y: 273,
          r: -45,
        },
      },
      {
        name: itemsDict.FIREWORKS,
        image: Fireworks,
        size: {
          width: 48,
          height: 46,
        },
        pos: {
          x: 1741,
          y: 585,
          r: 0,
        },
      },

      {
        name: itemsDict.STICK,
        image: Stick,
        size: {
          width: 90,
          height: 130,
        },
        pos: {
          x: 1532,
          y: 225,
          r: -150,
        },
        isKey: true,
      },
      {
        name: itemsDict.ICE,
        image: Ice,
        size: {
          width: 105,
          height: 74,
        },
        pos: {
          x: 525,
          y: 635,
          r: 0,
        },
      },
      {
        name: itemsDict.SNOWBALL,
        image: Snowball,
        size: {
          width: 75,
          height: 74,
        },
        pos: {
          x: 234,
          y: 906,
          r: 0,
        },
      },
      {
        name: itemsDict.MOON,
        image: Moon,
        size: {
          width: 81,
          height: 77,
        },
        pos: {
          x: 361,
          y: 116,
          r: 0,
        },
      },
      {
        name: itemsDict.SNOWFLAKE,
        image: Snowflake,
        size: {
          width: 68,
          height: 62,
        },
        pos: {
          x: 1168,
          y: 53,
          r: 0,
        },
      },
      {
        name: itemsDict.SKATES,
        image: Skates,
        size: {
          width: 68,
          height: 62,
        },
        pos: {
          x: 970,
          y: 600,
          r: 0,
        },
      },
    ],

    background: levelFour,
    point: {
      x: 1000,
      y: 555,
    },
    time: 90,
    move: 18,
  },

  4: {
    items: [
      {
        name: itemsDict.ELF,
        image: Elf,
        size: {
          width: 90,
          height: 130,
        },
        pos: {
          x: 1682,
          y: 205,
          r: 0,
        },
        isKey: true,
      },
      {
        name: itemsDict.ROBOT,
        image: Robot,
        size: {
          width: 30,
          height: 55,
        },
        pos: {
          x: 565,
          y: 729,
          r: 90,
        },
      },
      {
        name: itemsDict.LOLLIPOP,
        image: Lollipop,
        size: {
          width: 34,
          height: 44,
        },
        pos: {
          x: 1278,
          y: 209,
          r: 180,
        },
      },
      {
        name: itemsDict.MATRYOSHKA,
        image: Matryoshka,
        size: {
          width: 44,
          height: 52,
        },
        pos: {
          x: 1119,
          y: 800,
          r: 0,
        },
      },
      {
        name: itemsDict.SOCK,
        image: Sock,
        size: {
          width: 44,
          height: 61,
        },
        pos: {
          x: 222,
          y: 139,
          r: 90,
        },
      },
      {
        name: itemsDict.SNOWMAN,
        image: Snowman,
        size: {
          width: 105,
          height: 74,
        },
        pos: {
          x: 397,
          y: 229,
          r: 0,
        },
      },
      {
        name: itemsDict.STAR,
        image: Star,
        size: {
          width: 59,
          height: 57,
        },
        pos: {
          x: 478,
          y: 480,
          r: 0,
        },
      },
      {
        name: itemsDict.GINGERBREAD_MAN,
        image: GingerbreadMan,
        size: {
          width: 95,
          height: 64,
        },
        pos: {
          x: 1613,
          y: 930,
          r: 0,
        },
      },
      {
        name: itemsDict.SANTA_HAT,
        image: SantaHat,
        size: {
          width: 76,
          height: 50,
        },
        pos: {
          x: 797,
          y: 797,
          r: 0,
        },
      },
      {
        name: itemsDict.YETI,
        image: Yeti,
        size: {
          width: 87,
          height: 102,
        },
        pos: {
          x: 167,
          y: 864,
          r: 0,
        },
        isKey: true,
      },
      {
        name: itemsDict.EARTH,
        image: Earth,
        size: {
          width: 55,
          height: 53,
        },
        pos: {
          x: 1149,
          y: 523,
          r: 0,
        },
      },
      {
        name: itemsDict.WREATH,
        image: Wreath,
        size: {
          width: 105,
          height: 74,
        },
        pos: {
          x: 1455,
          y: 401,
          r: 0,
        },
      },
    ],

    background: levelFive,

    point: {
      x: 1200,
      y: 650,
    },
    time: 120,

    move: 30,
  },

  5: {
    items: [
      {
        name: itemsDict.NIGHTMARE,
        image: Nightmare,
        size: {
          width: 56,
          height: 41,
        },
        pos: {
          x: 725,
          y: 510,
          r: 45,
        },
        isKey: true,
      },
      {
        name: itemsDict.NIGHTMARE,
        image: Nightmare,
        size: {
          width: 76,
          height: 61,
        },
        pos: {
          x: 43,
          y: 373,
          r: 0,
        },
      },
      {
        name: itemsDict.NIGHTMARE,
        image: Nightmare,
        size: {
          width: 76,
          height: 61,
        },
        pos: {
          x: 1161,
          y: 816,
          r: 180,
        },
      },
      {
        name: itemsDict.NIGHTMARE,
        image: Nightmare,
        size: {
          width: 86,
          height: 91,
        },
        pos: {
          x: 539,
          y: 97,
          r: 0,
        },
      },
      {
        name: itemsDict.NIGHTMARE,
        image: Nightmare,
        size: {
          width: 66,
          height: 71,
        },
        pos: {
          x: 1750,
          y: 502,
          r: 45,
        },
      },
      {
        name: itemsDict.NIGHTMARE,
        image: Nightmare,
        size: {
          width: 46,
          height: 51,
        },
        pos: {
          x: 1461,
          y: 140,
          r: -80,
        },
      },
      {
        name: itemsDict.NIGHTMARE,
        image: Nightmare,
        size: {
          width: 66,
          height: 71,
        },
        pos: {
          x: 79,
          y: 789,
          r: 0,
        },
      },
      {
        name: itemsDict.NIGHTMARE,
        image: Nightmare,
        size: {
          width: 56,
          height: 61,
        },
        pos: {
          x: 724,
          y: 772,
          r: 60,
        },
      },
      {
        name: itemsDict.NIGHTMARE,
        image: Nightmare,
        size: {
          width: 56,
          height: 61,
        },
        pos: {
          x: 389,
          y: 425,
          r: 180,
        },
      },
      {
        name: itemsDict.NIGHTMARE,
        image: Nightmare,
        size: {
          width: 66,
          height: 71,
        },
        pos: {
          x: 996,
          y: 228,
          r: 0,
        },
      },
    ],

    background: levelSix,

    point: {
      x: 1425,
      y: 595,
    },

    time: 80,
    move: 22,
  },
  6: {
    items: [
      {
        name: itemsDict.SANTA,
        image: Santa,
        size: {
          width: 84,
          height: 104,
        },
        pos: {
          x: 231,
          y: 836,
          r: 0,
        },
      },
      {
        name: itemsDict.BOOGEYMAN,
        image: Boogeyman,
        size: {
          width: 55,
          height: 162,
        },
        pos: {
          x: 1529,
          y: 84,
          r: 180,
        },
        isKey: true,
      },
      {
        name: itemsDict.JACK_FROST,
        image: IceJack,
        size: {
          width: 90,
          height: 150,
        },
        pos: {
          x: 1250,
          y: 530,
          r: -135,
        },
      },
      {
        name: itemsDict.FAIRY,
        image: ToothFairyHelper,
        size: {
          width: 43,
          height: 106,
        },
        pos: {
          x: 1645,
          y: 860,
          r: -20,
        },
      },
      {
        name: itemsDict.EASTER_BUNNY,
        image: EasterBunny,
        size: {
          width: 90,
          height: 150,
        },
        pos: {
          x: 867,
          y: 857,
          r: -90,
        },
      },
      {
        name: itemsDict.SANDMAN,
        image: Sandman,
        size: {
          width: 50,
          height: 48,
        },
        pos: {
          x: 859,
          y: 332,
          r: 0,
        },
      },
      {
        name: itemsDict.ELF,
        image: Elf2,
        size: {
          width: 56,
          height: 61,
        },
        pos: {
          x: 212,
          y: 115,
          r: 0,
        },
      },
      {
        name: itemsDict.DEER,
        image: Deer,
        size: {
          width: 50,
          height: 70,
        },
        pos: {
          x: 1098,
          y: 364,
          r: 0,
        },
      },
      {
        name: itemsDict.TOOTH_FAIRY,
        image: ToothFairy,
        size: {
          width: 83,
          height: 100,
        },
        pos: {
          x: 414,
          y: 296,
          r: 0,
        },
      },
      {
        name: itemsDict.YETI,
        image: Yeti1,
        size: {
          width: 69,
          height: 54,
        },
        pos: {
          x: 1366,
          y: 760,
          r: 60,
        },
      },
      {
        name: itemsDict.EGG,
        image: Egg1,
        size: {
          width: 50,
          height: 76,
        },
        pos: {
          x: 569,
          y: 657,
          r: 0,
        },
      },
    ],

    background: levelSeven,

    point: {
      x: 1630,
      y: 490,
    },
    time: 70,
    move: 20,
  },
};
