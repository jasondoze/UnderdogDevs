// var assert = require('assert');
var fs = require("fs");
const { resourceLimits } = require("worker_threads");
var text = fs.readFileSync("countries.txt");
var textByLine = text.toString().toLowerCase().split("\n");
console.log(textByLine.length);

// console.log(textByLine.length);

// what are all the countries that have United in the name?

// function united(input) {
//     // create an empty arr varible
//     let countries = [];
//     // iterate throught the array
//     for (let i = 0; i < input.length; i++) {
//         if ( input[i].includes('United')) {
//             // push the countries that begin with United to the arr
//             countries.push(input[i]);
//         }
//     }
    
//     // return the countries array
//     return countries;
// }
// console.log(united(textByLine));
// // come back to : equal vs deepEqual

// function tests() {
//     // assert.deepEqual([], united(["Afghanistan"]));
//     // homework -- fill in input and output, make output = 1 instead of 0
//     // read about unit testing
//     let input = [];
//     let output = ['United States'];
//     assert.deepEqual([], united(input));
//     // assert.deepEqual(output, united(input));
//     assert.equal(1, output.length);

//     //optional / stretch -- more test cases

//     console.log("tests completed correctly");
//     console.log(input);
//     console.log(output);
// }
// tests();


// var input = textByLine;
// console.log(united(input));



//  What countries both begin and end with a vowel?
// function vowel(input) {
//     // create an empty arr varible
//     let countries = [];
//     // iterate throught the array
//     for (let i = 0; i < input.length; i++) {
//         if (input[i].charAt(0).includes('a') || input[i].charAt(0).includes('e') || input[i].charAt(0).includes('i') || input[i].charAt(0).includes('o') || input[i].charAt(0).includes('u')) {
//             // push the countries that begin with a vowel to the arr
//             countries.push(input[i]);
//         } else if (input[i].charAt(input[i].length - 1).includes('a') || input[i].charAt(input[i].length - 1).includes('e') || input[i].charAt(input[i].length - 1).includes('i') || input[i].charAt(input[i].length - 1).includes('o') || input[i].charAt(input[i].length - 1).includes('u')) {
//             // push the countries that end with a vowel to the arr
//             countries.push(input[i]);
//         }
//     }
//     // return the countries array
//     return countries;
// }
// console.log(vowel(textByLine));

// What country names are > 50% vowels?
function vowel(input) {
    // create an empty arr varible
    let countries = [];
    // iterate throught the array
    for (let i = 0; i < input.length; i++) {
        let count = 0;
        for (let j = 0; j < input[i].length; j++) {
            if (input[i].charAt(j).includes('a') || input[i].charAt(j).includes('e') || input[i].charAt(j).includes('i') || input[i].charAt(j).includes('o') || input[i].charAt(j).includes('u')) {
                count++;
            }
        }
        if (count > input[i].length / 2) {
            // if the count is greater than half the length of the string, push them to the arr
            countries.push(input[i]);
        }
    }
    // return the countries array
    return countries;
}
console.log(vowel(textByLine));


    
// Setting up storage to use during a for loop, including counters and arrays

//  What is the shortest country name? Make sure your solution can handle ties.
//  What countries use only one vowel in their name (the vowel can be used multiple times)
    // - For example, if the word “BEEKEEPER” were a country, it would be an answer, because it only uses “E”.
//  There is at least one country name that contains another country name. Find all of these cases.