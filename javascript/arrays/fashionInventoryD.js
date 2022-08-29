/*
The task now is to find all the laced shoes, but we are going to render 
them in a somewhat complex format. Your function should return shoe names 
that contain "lace" in them, and indicate which word contains "lace". The 
return value's format should be structured like this:
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

let generateLaceDetailes = (inventory) => {
  // create an empty array variable lace Details
  let laceDetails = [];
  // iterate over the inventory
  for (let i = 0; i < inventory.length; i++) {
    // create a designer array to reassign the iterator
    let designerArr = inventory[i];
    // create a shoes variable to assign the shoes array
    let shoes = designerArr.shoes;
    // iterate over the shoes array
    for (let j = 0; j < shoes.length; j++) {
      // reassign the shoe array names to a variable shoeName
      let shoeName = shoes[j].name;
      // create an element variable containing the target word lace
      let element = 'lace';
      // if the target word lace is present in the shoe names
      if (shoeName.includes(element)) {
        // assign the split shoe names array to the shoe arr variable
        let shoeArr = shoeName.split(' ');
        // iterate over the split shoe array
        for (let k = 0; k < shoeArr.length; k++) {
          // create a word description variable to reassign the iterator k
          let wordDescriptions = shoeArr[k];
          // if the word description includes the target word lace
          if (wordDescriptions.includes(element)) {
            // create an index variable assigned to the index of the target word lace
            let index = shoeArr.indexOf(wordDescriptions);
            // create an empty lace object
            let laceObj = {};
            // add the key namewords with a value of the shoe array
            laceObj['nameWords'] = shoeArr;
            // add the key target word index with a value of the index of the target word lace
            laceObj['targetWordIndex'] = index;
            // push the lace object into the lace details array
            laceDetails.push(laceObj);
          }
        }
      }
    }
  }
  return laceDetails;
};
console.log(generateLaceDetailes(currentInventory));

// var expectedResult = [
//   {
//     "nameWords": [
//       "tasselled",
//       "black",
//       "low-top",
//       "lace-up"
//     ],
//     "targetWordIndex": 3
//   },
//   {
//     "nameWords": [
//       "tasselled",
//       "green",
//       "low-top",
//       "lace-up"
//     ],
//     "targetWordIndex": 3
//   },
//   {
//     "nameWords": [
//       "red",
//       "leather",
//       "laced",
//       "sneakers"
//     ],
//     "targetWordIndex": 2
//   },
//   {
//     "nameWords": [
//       "black",
//       "leather",
//       "laced",
//       "sneakers"
//     ],
//     "targetWordIndex": 2
//   }
// ];
