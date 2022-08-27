/*
Write a function `averageOfFour(num1, num2, num3, num4)` that accepts 
four numbers as arguments. The function should return the average of all four numbers.
*/

let averageOfFour = (intUno, intDos, intTres, intQuatro) => {
  let sum = intUno + intDos + intTres + intQuatro;
  return sum / 4;
};
console.log(averageOfFour(10, 4, 12, 3)); // 7.25
console.log(averageOfFour(-20, 50, 4, 21)); // 13.75
console.log(averageOfFour(10, 4, 12, 3)); // 7.25
console.log(averageOfFour(5, 5, 3, 7)); // 5