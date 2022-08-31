/*
Your current client is a casino that needs you to fix their Black-Jack card 
counting program. The function should take an array of objects, each object is 
a card that was dealt and its value is the number on the card.

The way card counting works is that each card has a _weighted_ value. 
Cards 2 through 6 are worth one point; 7, 8 and 9 are worth zero; and 10s, 
face cards and Aces are worth negative one. This type of card-counting system 
is called the _HiLo_ count. When counting down a standard deck of 52 cards, 
you'll notice the count will go up and down, and always end at zero if you 
counted correctly.

The `cardCounter` function is supposed to take an array of card objects and 
return the count (weighted value) of the cards. It doesn't seem to be producing 
accurate results, see if you can fix it before the card-sharks beat the house!
*/
let dealtCards = [
  { 'card 0': 2 },
  { 'card 1': 6 },
  { 'card 2': 8 },
  { 'card 3': 'face or ace' },
];
let count = 0;
let cardCounter = (array) => {
  for (var i = 0; i < array.length; i++) {
    var card = array[i];
    // console.log(card);

    if (card['card ' + i] >= 2 && card['card ' + i] <= 6) {
      count++;
    } else if (card['card ' + i] >= 10 || card['card ' + i] === 'face or ace') {
      count--;
    }
  }
  return count;
};

console.log(cardCounter(dealtCards));
