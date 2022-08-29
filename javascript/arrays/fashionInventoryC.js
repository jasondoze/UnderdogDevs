/*
Your task is to find all of the shoes with "black" in the name. 
Your function should filter these shoes, and return them in a 
"flat list" similarly to Part A:

//...console output:
Brunello Cucinelli, tasselled black low-top lace-up, 1000
Gucci, black leather laced sneakers, 900
Here is an example of a flat list in code:

var flatList = "First line\nSecond Line\nThird Line";
console.log(flatList);
Observe that a "flat list" refers to a string where each new line 
is separated by the newline symbol. Also note that the "flat list" 
does not end with a newline symbol. There are, like all of the challenges 
in this course, tests attached to these exercises. However, in order to 
get the most effective practice, please continue to write your own unit tests.
*/
var currentInventory = [
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

let blackShoes = (inventory) => {
  let blackFlatList = '';
  for (let i = 0; i < inventory.length; i++) {
    let designerName = inventory[i].name;
    let shoeArr = inventory[i].shoes;
    for (let j = 0; j < shoeArr.length; j++) {
      let shoeNames = shoeArr[j].name;
      let shoePrice = shoeArr[j].price;
      if (shoeNames.includes('black')) {
        blackFlatList += `${designerName}, ${shoeNames}, ${shoePrice}\n`;
      }
      // console.log(shoeNames);
    }
  }
  return blackFlatList;
};

console.log(blackShoes(currentInventory));
