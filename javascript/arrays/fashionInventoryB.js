/*
There are, like all of the challenges in this course, tests attached to these exercises. 
However, in order to get the most effective practice, please continue to write your own 
unit tests.
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

let designerShoes = (inventoryArray) => {
  let averagePriceObj = {
    designers: [],
  };
  console.log(averagePriceObj, 'average price object');

  for (let shoeDesigners of inventoryArray) {
    // console.log('desingers', shoeDesigners)
    let designer = shoeDesigners.name;
    console.log('designer', designer)
    let shoeArr = shoeDesigners.shoes;
    console.log('shoeArr', shoeArr)
    let priceObj = {
      name: designer,
      averagePrice: sum(shoeArr),
    };
    console.log(priceObj, 'price object');
    averagePriceObj.designers.push(priceObj);
    console.log('averagePriceObj', averagePriceObj)
  }
  return averagePriceObj;
};

let sum = (shoeArr) => {
  let sum = 0;
  for (let shoePrice of shoeArr) {
    let shoeCost = shoePrice.price;
    sum += shoeCost;
  }
  return sum / shoeArr.length;
};

console.log(designerShoes(currentInventory));

// let expected = {
//   'designers': [
//     {
//       'name': 'Brunello Cucinelli',
//       'averagePrice': 1025
//     },
//     {
//       'name': 'Gucci',
//       'averagePrice': 850
//     }
//   ]
// };
