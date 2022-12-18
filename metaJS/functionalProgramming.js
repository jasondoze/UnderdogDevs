function consoleLog(val) {
  console.log(val);
  return val;
}
consoleLog('Hello');
/*
function consoleLog(val) {
    console.log(val)
    return val
}
undefined
consoleLog('Hello')
VM412:2 Hello
'Hello'
*/


let counter = 3;
function example() {
  console.log(counter);
  counter--;
  if (counter == 0) return;

  example();
}
// example();
// 3
// 2
// 1

function addTwoNums(a, b) {
  console.log(a + b)
}

function randomNum() {
  return Math.floor((Math.random() * 10) + 1);
}
function specificNum() { return 42 };

var useRandom = true;

var getNumber;

if(useRandom) {
  getNumber = randomNum
} else {
  getNumber = specificNum
}

// addTwoNums(getNumber(), getNumber())
// addTwoNums(specificNum(), specificNum()); // returned number is 84
// addTwoNums(specificNum(), randomNum()); // returned number is 42 + some random number

// Task 1: Build a function-based console log message generator
function consoleStyler(color, background, fontSize, txt) {
  let message = "%c" + txt;
  let style = `color: ${color}`;
  style += `background: ${background}`;
  style += `font-size: ${fontSize}`;
  console.log(message, style);
}

// Task 2: Build another console log message generator
function celebrateStyler(reason) {
  let fontStyle = "color: tomato; font-size: 50px";

  if (reason == "birthday") {
      console.log(`%cHappy birthday`, fontStyle);
  } else if (reason == "champions") {
      console.log(`%cCongrats on the title!`, fontStyle);
  } else {
      console.log(message, style);
  }
}

// Task 3: Run both the consoleStyler and the celebrateStyler functions
consoleStyler('#1d5c63', '#ede6db', '40px', 'Congrats!');
celebrateStyler('birthday');


// Task 4: Insert a congratulatory and custom message
function styleAndCelebrate() {
  consoleStyler(color, background, fontSize, txt);  
celebrateStyler(reason);
}
// Call styleAndCelebrate

// console.log(styleAndCelebrate('ef7c8e', 'fae8e0', '30px', 'You made it!', 'champions'));

function meal(animal) {
  animal.food = animal.food + 10;
}

var dog = {
  food: 10
};
// meal(dog);
// meal(dog);

console.log(dog.food);