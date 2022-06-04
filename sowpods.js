var fs = require("fs");
var text = fs.readFileSync("sowpods.txt");
var textByLine = text.toString().split("\n");

    // For loops and if conditions

//  What are all of the words containing UU?
// function UU(input) {
//     for (let i = 0; i < input.length; i++) {
//         if (input[i].includes("UU")) {
//             console.log(input[i]);
//         }
//     }  
// }
// UU(textByLine);
// //  What are all of the words containing an X and a Y and a Z?
// function xyZ(input) {
//     for (let i = 0; i < input.length; i++) {
//         if (input[i].includes('X') && input[i].includes('Y') && input[i].includes('Z')) {
//             console.log(input[i]);
//         }
//     }
// }
// xyZ(textByLine);
// //  What are all of the words containing a Q but not a U?
// function qNotU(input) {
//     for (let i = 0; i < input.length; i++) {
//         if (input[i].includes('Q') && !input[i].includes('U'))
//         console.log(input[i]);
//     }
// }
// qNotU(textByLine);
// //  What are all of the words that contain the word 'CAT' and are exactly 5 letters long?
// function cat5(input) {
//     for (let i = 0; i < input.length; i++) {
//         if (input[i].includes('CAT') && input[i].length === 5) {
//             console.log(input[i]);
//         }
//     }
// }
// cat5(textByLine);
// //  What are all of the words that have no E or A and are at least 15 letters long?
// function eaFifteen(input) {
//     for (let i = 0; i < input.length; i++) {
//         if (!input[i].includes('E') && !input[i].includes('A') && input[i].length >= 15) {
//             console.log(input[i]);
//         }
//     }
// }
// eaFifteen(textByLine);
//  What are all of the words that have a B and an X and are less than 5 letters long?
// function bxFive(input) {
//     for (let i = 0; i < input.length; i++) {
//         if (input[i].includes('B') && input[i].includes('X') && input[i].length < 5) {
//             console.log(input[i]);
//         }
//     }
// }
// bxFive(textByLine);
//  What are all of the words that both start and end with a Y?
// function yBoth(input) {
//     for (let i = 0; i < input.length; i++) {
//         if (input[i].startsWith('Y') && input[i].endsWith('Y')) {
//             console.log(input[i]);
//         }
//     }
// }
// yBoth(textByLine);
//  What are all of the words with no vowel and not even a Y?
// function noVowel(input) {
//     for (let i = 0; i < input.length; i++) {
//         if (!input[i].includes('A') && !input[i].includes('E') && !input[i].includes('I') && !input[i].includes('O') && !input[i].includes('U') && !input[i].includes('Y')) {
//             console.log(input[i]);
//         }
//     }
// }
// noVowel(textByLine);
//  What are all of the words that have all 5 vowels, in any order?
// function allVowel(input) {
//     for (let i = 0; i < input.length; i++) {
//         if (input[i].includes('A') && input[i].includes('E') && input[i].includes('I') && input[i].includes('O') && input[i].includes('U')) {
//             console.log(input[i]);
//         }
//     }
// }
// allVowel(textByLine);
//  What are all of the words that have the letters 'A,E,I,O,U' in alphabetical order?
// function AEIOU(input) {
//     let vowels = [];
//     let alphabetical = [];
//     for (let i = 0; i < input.length; i++) {
//         if (input[i].includes('A') && input[i].includes('E') && input[i].includes('I') && input[i].includes('O') && input[i].includes('U')) {
//             vowels.push(input[i]);
//             // console.log(vowels);
//         }
//     }
//     // check to see if the letter A comes before the letter E in the word, and the E comes before the I and the I comes before the O and the O comes before the U
//     for (let i = 0; i < vowels.length; i++) {
//         if (vowels[i].indexOf('A') < vowels[i].indexOf('E') && vowels[i].indexOf('E') < vowels[i].indexOf('I') && vowels[i].indexOf('I') < vowels[i].indexOf('O') && vowels[i].indexOf('O') < vowels[i].indexOf('U')) {
//             alphabetical.push(vowels[i]);
//         }
//     }
//     return alphabetical;
// }
// console.log(AEIOU(textByLine));
    
// Setting up storage to use during a for loop, including counters and arrays

//  How many words contain the substring "TYPE”?
function type(input) {
    var count = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i].includes('TYPE')) {
            count++;
        }
    }
    return count;
}
console.log(type(textByLine));

//  Create and print an array containing all of the words that end in "GHTLY"
// function ghtly(input) {
//     var array = [];
//     for (let i = 0; i < input.length; i++) {
//         if (input[i].endsWith('GHTLY')) {
//             array.push(input[i]);
//         }
//     }
//     console.log(array);
// }
// ghtly(textByLine);
//  What is the shortest word that contains all 5 vowels?
// function shortestVowels(input) {
//     let allVowels = [];
//     let shortWord = [];
//     let shortVowel = [0];
//     for (let i = 0; i < input.length; i++) {
//         if (input[i].includes("A") && input[i].includes("E") && input[i].includes("I") && input[i].includes("O") && input[i].includes("U")) {
//         allVowels.push(input[i]);
//         }
//             for (let j = 0; j < allVowels.length; j++) {
//                 if (allVowels.length > shortVowel.length) {
//                 shortWord = allVowels[j];
//                 return shortWord;
//             } 
//         }
//     } 
// }
// console.log(shortestVowels(textByLine));
           
//  What is the longest word that contains no vowels?
// function noVowelLong(input) {
//     let noVowels = [];
//     let longestWord = '';
//     let longVowel = [0];

//     for (let i = 0; i < input.length; i++) {
//         if (!input[i].includes("A") && !input[i].includes("E") && !input[i].includes("I") && !input[i].includes("O") && !input[i].includes("U")) {
//             noVowels.push(input[i]);
//         }
//         for (let j = 0; j < noVowels.length; j++) {
//             if ( noVowels[j].length > longVowel.length) {
//             longestWord = noVowels[j];
            
//             }
//         }
//     }
//     return longestWord;
// }
// console.log(noVowelLong(textByLine));
//  Which of the letters Q, X, and Z is the least common?
// function qXZ(input) {
//     let leastCommon = [];
//     let leastCommonLetter = '';
//     let leastCommonCount = [0];

//     for (let i = 0; i < input.length; i++) {
//         if(input[i].includes('Q')) {
//             leastCommon.push('Q');
//         } else if (input[i].includes('X')) {
//             leastCommon.push('X');
//         } else if (input[i].includes('Z')) {
//             leastCommon.push('Z');
//         }
//     }
//     for (let j = 0; j < leastCommon.length; j++) {
//         if (leastCommon.length > leastCommonCount.length) {
//             leastCommonLetter = leastCommon[j];
//             return leastCommonLetter;
//         }
//     }  
// }
// console.log(qXZ(textByLine))
// //  What is the longest palindrome?
// // create a palindrom input array variable
// function longPalindrome(input) {
//     let palindrome = [];
//     for (let i = 0; i < input.length; i++) {
//         // split the input[i];
//         let splitter = input[i].split('').join('');    
//         // reverse the input[i]
//         let reverse = input[i].split('').reverse().join('');
//         // if the split = the reverse
//         if (splitter === reverse) {
//             palindrome.push(splitter);
//         }
//     }
//     return palindrome;
// }
// console.log(longPalindrome(textByLine));
//  What are all of the letters that never appear consecutively in an English word? For example, we know that “U” isn’t an answer, because of the word VACUUM, and we know that “A” isn’t an answer, because of “AARDVARK”, but which letters never appear consecutively?
// function nonConsec(input) {
//     let noConsec = [];
//     let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

//     for (let i = 0; i < input.length; i++) {
//         // split the words into characters
//         let splitter = input[i].split('');
//         // iterate over the split chars
//             for (let j = 0; j < splitter.length; j++) {
//             // check if any character is the same as the next char
//                 if(splitter[j] === splitter[j +1]) {
//                     noConsec.push(splitter[j]);
//                 }
//             }
//         }
//     // return 
//     // iterate over the alphabet
//     for (let k = 0; k < alphabet.length; k++) {
//         if (noConsec.indexOf(alphabet[k]) === -1) {
//             return alphabet[k];
//         }
//     }
// }
// console.log(nonConsec(textByLine));
