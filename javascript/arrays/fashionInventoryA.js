/*
Write a function that will take in this currentInventory array as its argument. 
Your function should access all the shoes across each designer and return them 
out in a flat list: 
{designer name} - {shoe name} - {price}{designer name} - {shoe name} - {price}

//...console output:
Brunello Cucinelli, tasselled black low-top lace-up, 1000
Brunello Cucinelli, tasselled green low-top lace-up, 1100
// and so on...
Here is an example of a flat list in code:

var flatList = "First line\nSecond Line\nThird Line";
console.log(flatList);
Observe that a "flat list" refers to a string where each new line is separated by 
the newline symbol. Also note that the "flat list" does not end with a newline symbol. 
There are, like all of the challenges in this course, tests attached to these exercises. 
However, in order to get the most effective practice, please continue to write your own unit tests.
*/

let currentInventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      { name: 'tasselled black low-top lace-up', price: 1000 },
      { name: 'tasselled green low-top lace-up', price: 1100 },
      { name: 'plain beige suede moccasin', price: 950 },
      { name: 'plain olive suede moccasin', price: 1050 },
    ],
  },
  {
    name: 'Gucci',
    shoes: [
      { name: 'red leather laced sneakers', price: 800 },
      { name: 'black leather laced sneakers', price: 900 },
    ],
  },
];

let allShoes = (inventory) => {
  let flatList = '';
  for (const shoeArr of inventory) {
    // console.log(shoeArr.name);
    let shoeName = shoeArr.shoes;
    for (const style of shoeName) {
      // console.log(style.name, style.price);
      // console.log(style.price);
      flatList += `${shoeArr.name}, ${style.name}, ${style.price}\n`;
    }
  }
  return flatList;
};
// console.log(currentInventory);
console.log(allShoes(currentInventory));
