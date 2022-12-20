// concatenate with spread operator
const fruits = ['apple', 'pear', 'plum'];
const berries = ['blueberry', 'strawberry'];
const fruitsAndBerries = [...fruits, ...berries]; // concatenate
console.log(fruitsAndBerries); // outputs a single array

// join objects
const flying = { wings: 2 };
const car = { wheels: 4 };
const flyingCar = { ...flying, ...car };
console.log(flyingCar); // {wings: 2, wheels: 4}

// add one or more members to an existing array
let veggies = ['onion', 'parsley'];
veggies = [...veggies, 'carrot', 'beetroot'];
console.log(veggies);

// spread out a string into separate array items
const name = 'jason';
const nameChars = [...name];
console.log(nameChars); // [ 'j', 'a', 's', 'o', 'n' ]

// copy an object into a completely separate object, using the spread operator
const car1 = {
  speed: 200,
  color: 'yellow',
};
const car2 = { ...car1 };
car1.speed = 201;
console.log(car1.speed, car2.speed);
console.log(car1);

// copy an array into a completely separate array
const fruits1 = ['apples', 'pears'];
const fruits2 = [...fruits1];
fruits1.pop();
console.log(fruits1, 'not', fruits2);


// destructuring
const meal = ["soup", "steak", "ice cream"]
    let [starter] = meal;
    console.log(starter);


    
let obj = {
  key: 1,
  value: 4
  };

  let output = { ...obj };
  output.value -= obj.key;

  console.log(output.value);