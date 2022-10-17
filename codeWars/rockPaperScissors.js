/*
Rock Paper Scissors
Let's play! You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2 --> Output):

"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"

*/

const rps = (p1, p2) => {
  if (
    (p1 === 'rock' && p2 === 'rock') ||
    (p1 === 'paper' && p2 === 'paper') ||
    (p1 === 'scissors' && p2 === 'scissors')
  ) {
    return 'Draw!';
  } else if (
    (p1 === 'paper' && p2 === 'rock') ||
    (p1 === 'scissors' && p2 === 'paper') ||
    (p1 === 'rock' && p2 === 'scissors')
  ) {
    return 'Player 1 won!';
  } else if (
    (p2 === 'paper' && p1 === 'rock') ||
    (p2 === 'scissors' && p1 === 'paper') ||
    (p2 === 'rock' && p1 === 'scissors')
  ) {
    return 'Player 2 won!';
  }
};

console.log(rps('rock', 'scissors'), 'rock');
console.log(rps('scissors', 'paper'), 'scissors');
console.log(rps('paper', 'rock'), 'paper');

console.log(rps('scissors', 'rock'), 'rock');
console.log(rps('paper', 'scissors'), 'scissors');
console.log(rps('rock', 'paper'), 'paper');

console.log(rps('rock', 'rock'), 'Draw!');
console.log(rps('scissors', 'scissors'), 'Draw!');
console.log(rps('paper', 'paper'), 'Draw!');

// refactor
const rps2 = (p1, p2) => {
  if (p1 === p2) {
    return 'Draw!';
  }
  if (
    (p1 === 'paper' && p2 === 'rock') ||
    (p1 === 'scissors' && p2 === 'paper') ||
    (p1 === 'rock' && p2 === 'scissors')
  ) {
    return 'Player 1 won!';
  } else {
    return 'Player 2 won!';
  }
};

console.log(rps2('rock', 'scissors'), 'rock');
console.log(rps2('scissors', 'paper'), 'scissors');
console.log(rps2('paper', 'rock'), 'paper');

console.log(rps2('scissors', 'rock'), 'rock');
console.log(rps2('paper', 'scissors'), 'scissors');
console.log(rps2('rock', 'paper'), 'paper');

console.log(rps2('rock', 'rock'), 'Draw!');
console.log(rps2('scissors', 'scissors'), 'Draw!');
console.log(rps2('paper', 'paper'), 'Draw!');
