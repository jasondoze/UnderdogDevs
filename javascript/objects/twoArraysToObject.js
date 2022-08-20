
// merge two arrays into one object
let keyPair = ['ID', 'FirstName', 'LastName', 'Gender'];
let valuePair = [1, 'Mehvish', 'Ashiq', 'Female'];
let arr = [];
let obj = {};

for (let i = 0; i < keyPair.length && i < valuePair.length; i++) {
  obj[keyPair[i]] = valuePair[i];
}
arr.push(obj);
console.log(arr);

/* 
[
  { ID: 1, FirstName: 'Mehvish', LastName: 'Ashiq', Gender: 'Female' }
]
*/
