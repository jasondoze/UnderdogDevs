// Destructuring

const game = {
  title: 'Monkey',
  platform: 'Donkey Kong',
  year: '1994',
  characters: {
    main: 'Donkey Kong Sr',
    side: 'Donkey Donkey Doo',
    boss: 'Kool Keith',
  },
};
console.log(game);

// let title = game.title;
// let platform = game.platform;
// console.log(title, platform);

// Object Destructuring, does not mutate the original object
// let { title, platform, year } = game;
// console.log(title, platform, year);

// reassign variable year to release
let {
  title,
  platform,
  year: release,
  characters,
  characters: { main, side, boss },
} = game;
console.log(main, side, boss);
console.log(characters);



let { length } = 'Dream on';
console.log(length);
