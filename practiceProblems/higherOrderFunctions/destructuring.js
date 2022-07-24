// Destructuring

const game = {
  title: 'Monkey',
  platform: 'Donkey Kong',
  year: '1994',
};
console.log(game);

// let title = game.title;
// let platform = game.platform;
// console.log(title, platform);

// Object Destructuring, does not mutate the original object
// let { title, platform, year } = game;
// console.log(title, platform, year);


// reassign variable year to release
let { title, platform, year: release } = game;
console.log(release);
