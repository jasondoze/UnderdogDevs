// the object is stored in memory with x as the reference to that value
let x = { value: 10 };
// only the address or reference is getting copied, not the object
let y = x;
// both x and y are pointing to the same object in memory
x.value = 20;
// when we modify the object, the changes directly affected by the other varialble

let number = 10;
function increase(number) {
  number++;
}
increase(number);
console.log(number);
// 10

console.log('------------');

let obj = { amount: 10 };
function increased(obj) {
  obj.amount++;
}
increased(obj);
console.log(obj);
// { amount: 11 }

console.log('------------');

let spaceship = {
  crew: {
    captain: {
      name: 'Lily',
      degree: 'Computer Engineering',
      cheerTeam() {
        console.log('You got this!');
      },
    },
    'chief officer': {
      name: 'Dan',
      degree: 'Aerospace Engineering',
      agree() {
        console.log('I agree, captain!');
      },
    },
    medic: {
      name: 'Clementine',
      degree: 'Physics',
      announce() {
        console.log(`Jets on!`);
      },
    },
    translator: {
      name: 'Shauna',
      degree: 'Conservation Science',
      powerFuel() {
        console.log('The tank is full!');
      },
    },
  },
};

for (let members in spaceship.crew) {
  console.log(`${members}: ${spaceship.crew[members].name}`);
}
for (let members in spaceship.crew) {
  console.log(
    `${spaceship.crew[members].name}: ${spaceship.crew[members].degree}`
  );
}
