// Write a function `pairPrint` that accepts an array as an argument. The function should print
// all unique pairs of elements in the array. The function doesn't need to return any value. It
// should just print to the terminal.

let pairPrint = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      console.log(array[i], array[j]);
    }
  }
};

pairPrint(['artichoke', 'broccoli', 'carrot', 'daikon']);
// prints
//  artichoke - broccoli
//  artichoke - carrot
//  artichoke - daikon
//  broccoli - carrot
//  broccoli - daikon
//  carrot - daikon

pairPrint(["apple", "banana", "clementine"]);
// prints
//  apple - banana
//  apple - clementine
//  banana - clementine
