// Write a function called "transformEmployeeData" that transforms some employee
// data from one format to another.
var input = [
  [
    ['firstName', 'Joe'],
    ['lastName', 'Blow'],
    ['age', 42],
    ['role', 'clerk'],
  ],
  [
    ['firstName', 'Mary'],
    ['lastName', 'Jenkins'],
    ['age', 36],
    ['role', 'manager'],
  ],
];

let transformEmployeeData = (arr) => {
  let container = [];
  for (let i = 0; i < arr.length; i++) {
    let personArray = arr[i];
    // console.log(personArray, 'arr[i]');
    let personObj = {};
    for (let j = 0; j < personArray.length; j++) {
      // console.log(personArray, 'arr[j]');
      let key = personArray[j][0];
      // console.log('key', key);
      let value = personArray[j][1];
      // console.log('value', value);
      personObj[key] = value;
      console.log(personObj);
    }
    container.push(personObj);
  }
  return container;
};

console.log(transformEmployeeData(input));
// [
//     {firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk'},
//     {firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager'}
// ]
// Note that the input may have a different number of rows or different keys than the given sample.

// For example, let's say the HR department adds a "tshirtSize" field to each employee record.
// Your code should flexibly accommodate that.
