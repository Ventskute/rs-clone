import jack from '../../assets/characters/jack.png';
import moon from '../../assets/characters/moonface.png';
import bunny from '../../assets/characters/bunny.png';
import sandy from '../../assets/characters/sandy.png';
import fairy from '../../assets/characters/fairy_queen.png';
import santa from '../../assets/characters/northman.png';
import pitch from '../../assets/characters/pitch.png';

export default {
  map: [
    {
      img: moon,
      title: 'Moonface',
      text: 'Open your eyes, Guardian!',
      answer: 'Em.. What?',
    },
    {
      img: moon,
      title: 'Moonface',
      text:
        'I have long watched what is happening in the world, and now, when everything is collapsing before our eyes, the Earth needs a new Guardian more than ever. pI I chose you!',
      answer: 'What are the Keepers?',
    },
    {
      img: moon,
      title: 'Moonface',
      text:
        'The Guardians are the protectors of the Earth. Each Guardian is a master in his own field. For example, Jack Frost is the lord of cold and snow, the Tooth Fairy is the keeper of childhood memories, and the Sandman is the creator of dreams.',
      answer: 'And who am I?',
    },
    {
      img: moon,
      title: 'Moonface',
      text:
        'The Guardians were attacked. Pitch Black - the lord of darkness and fear took away their tools, without which they are like without hands. I chose you for your sharp mind and resourcefulness.You will help the Keepers find their tools and defeat Pitch Black.',
      answer: 'What should I do?',
    },
    {
      img: moon,
      title: 'Moonface',
      text:
        'Fly to the Easter Bunny Maze. He always kept a fighting spirit and a good shape, but without brushes and paints, he completely lost his mood.',
      answer: 'OK',
    },
  ],
  0: [
    {
      img: bunny,
      title: 'Easter Bunny ',
      text:
        "Healthy! At the North Pole there was a rumor that the man in moon has chosen a new Guardian. It's you?",
      answer: 'I think so',
    },
    {
      img: pitch,
      title: 'Pitch Black',
      text:
        'Wow, we have a new guest. Hey, Rabbit, can he find your eggs and paint?! Ha-ha!',
      answer: 'Why did you steal them?',
    },
    {
      img: pitch,
      title: 'Pitch Black',
      text:
        "Because people are no longer afraid of the dark! I'll get the planet in order! \nNavedu here is such chaos that it will be scary to sleep even in the light!",
      answer: 'What does the Rabbit have to do with it?',
    },
    {
      img: pitch,
      title: 'Pitch Black',
      text:
        'Easter is a bright holiday, and colorful eggs make people more cheerful... I hate all this fun!',
      answer: ' ... ',
    },
    {
      img: bunny,
      title: 'Easter Bunny',
      text:
        "Hey, the New Guardian! Help me find my colors, and we'll bring Easter back to the people! I hope that after that we will have time to help the Sandbox!",
      answer: 'OK',
    },
  ],
  1: [
    {
      img: sandy,
      title: 'Sandman *speaks in sand symbols*',
      text:
        "Hello! I am a Sandman, I send good dreams to people all over the world! I especially love to embody children's dreams in dreams!",
      answer: 'Nice to meet you!',
    },
    {
      img: sandy,
      title: 'Sandman *speaks in sand symbols*',
      text:
        'Pitch Black stole my things, and it is from them that I get the ideas of dreams. Without these items, there will be no bright and good dreams.',
      answer: 'Oh no!',
    },
    {
      img: bunny,
      title: 'Easter Bunny',
      text:
        "OK, Sandman, don't grieve! Now we'll show this scoundrel how to steal things from good creatures!",
      answer: "Let's show it!",
    },
  ],
  2: [
    {
      img: fairy,
      title: 'The Tooth Fairy',
      text: "Pitch Black! I'll give you thirty seconds to get my helpers back.",
      answer: '... ',
    },
    {
      img: pitch,
      title: 'Pitch Black',
      text: 'Or what? Will you put a coin under my pillow? Ha-ha-ha!',
      answer: ' ... ',
    },
    {
      img: fairy,
      title: 'The Tooth Fairy',
      text:
        'If at least one wing of the fairies crumples, I will mark you with these hands so that your own mother will not recognize you!',
      answer: ' ... ',
    },
    {
      img: bunny,
      title: 'Easter Bunny',
      text: "Save the Tooth Fairy's helpers while I help her with Pitch Black!",
      answer: 'OK',
    },
  ],
  3: [
    {
      img: fairy,
      title: 'The Tooth Fairy',
      text:
        "What a mess we're in! I used to collect children's teeth, not knock out adults ones... but... \nThank you for saving my assistants. Let's find Jack Frost.",
      answer: 'Come on',
    },
    {
      img: jack,
      title: 'Jack Frost',
      text:
        "Where is he?! I can't even raise a storm without it, let alone fly!",
      answer: 'Jack?',
    },
    {
      img: fairy,
      title: 'The Tooth Fairy',
      text: 'Jack! Hello, meet the new Guardian!',
      answer: 'Hi!',
    },
    {
      img: jack,
      title: 'Jack Frost',
      text:
        "Hello! Can you help me find my staff?\" Without it, I'm like without hands...",
      answer: '... ',
    },
    {
      img: fairy,
      title: 'The Tooth Fairy',
      text: "Pitch Black stole it! Yes, he's back...",
      answer: "Let's look",
    },
  ],
  4: [
    {
      img: jack,
      title: 'Jack Frost',
      text: "That's it! With a staff, it's a different matter!",
      answer: 'Happy for you',
    },
    {
      img: pitch,
      title: 'Pitch Black',
      text:
        "Jack, jack, jack... We could have done so much together, but you refused!I should have broken your staff, because you're pathetic without it!",
      answer: "that's Enough!",
    },
    {
      img: santa,
      title: 'Northerner',
      text:
        "Oh, this Pitch Black! He can't live without intimidating someone! Even my Yeti kidnapped, and who, if not they, will make Christmas toys?!",
      answer: 'Bigfoot is big',
    },
    {
      img: santa,
      title: 'Northerner',
      text:
        "They're big, but they're also well hidden! Help me find my helpers so that we can make a holiday for people!",
      answer: 'OK',
    },
  ],
  5: [
    {
      img: santa,
      title: 'Northerner',
      text: 'We are at the very lair of the Pitch Black!',
      answer: 'Strange horses...',
    },
    {
      img: sandy,
      title: 'Sandman *speaks in sand symbols*',
      text:
        "These are not horses... It's Nightmares! They used to be my dreams, but then Pitch Black blackened them!",
      answer: 'Oh no!',
    },
    {
      img: fairy,
      title: 'The Tooth Fairy',
      text: "Let's deal with them! Go to battle!",
      answer: 'Ahhh!',
    },
  ],
  6: [
    {
      img: jack,
      title: 'Jack Frost',
      text: "You can't see anything through this fog!",
      answer: "It's dark",
    },
    {
      img: fairy,
      title: 'The Tooth Fairy *screams*',
      text: "Where are you?! I can't see you!",
      answer: 'Aww!',
    },
    {
      img: pitch,
      title: 'Pitch Black',
      text:
        "It's okay to be afraid in Pitch Black dark. And not seeing anything is also normal... \n But I can see you! And I'm not afraid of the dark! Try to beat me!",
      answer: 'Everyone is afraid of something!',
    },
  ],
  final: [
    {
      img: santa,
      title: 'Northerner',
      text: 'I feel sorry for him! Caught up with their own nightmares!',
      answer: 'Serves you right',
    },
    {
      img: bunny,
      title: 'Easter Bunny',
      text: "I hope the world gets a little brighter! We'll do our best!",
      answer: 'Sure!',
    },
    {
      img: fairy,
      title: 'The Tooth Fairy',
      text: 'Thank you! You really are the new Guardian!',
      answer: 'The End',
    },
  ],
};
