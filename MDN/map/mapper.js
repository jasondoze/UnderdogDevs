let myMap = new Map();
myMap.set(1, 'Uno');
myMap.set(2, 'Dos');
myMap.set(3, 'Tres');
myMap.set(4, 'Quatro');

console.log(myMap);

for (let key of myMap.keys()) console.log(`key is ${key}`);
for (let value of myMap.values()) console.log(`value is ${value}`);

for (let [key, value] of myMap) {
  console.log(`key is: ${key} value is: ${value}`)
}

// always gives the value first
myMap.forEach((value, key) => console.log(`value is ${value} and key is ${key}`))