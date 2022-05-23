var fs = require("fs");
var text = fs.readFileSync("UnderdogDevs/sowpods.txt").toString('utf-8');
var allTxt = text.split("\n");

// What are all of the words containing UU?
function uuWords(input) {
    var uuWords = [];
    for (var i = 0; i < input.length; i++) {
        if (input[i].includes("UU")) {
            uuWords.push(input[i]);
        }
    }
    return uuWords;
}
console.log(uuWords(allTxt));

// What are all of the words containing an X and a Y and a Z?
function xyzWords(input) {
    var xyzWords = [];
    for (var i = 0; i < input.length; i++) {
        if (input[i].includes("X") && input[i].includes("Y") && input[i].includes("Z")) {
            xyzWords.push(input[i]);
        }
    }
    return xyzWords;
}
console.log(xyzWords(allTxt));

// What are all of the words containing a Q but not a U?
function qButNotU(input) {
    var qButNotU = [];
    for (var i = 0; i < input.length; i++) {
        if (input[i].includes("Q") && !input[i].includes("U")) {
            qButNotU.push(input[i]);
        }
    }
    return qButNotU;
}
console.log(qButNotU(allTxt));

// What are all of the words that contain the word CAT and are exactly 5 letters long?
function catFive (input) {
    var catFive = [];
    for (var i = 0; i < input.length; i++) {
        if (input[i].includes("CAT") && input[i].length === 5) {
            catFive.push(input[i]);
        }
    }
    return catFive;
}
console.log(catFive(allTxt));

// What are all of the words that have no E or A and are at least 15 letters long?
function noEA (input) {
    var noEA = [];
    for (var i = 0; i < input.length; i++) {
        if (!input[i].includes("E") && !input[i].includes("A") && input[i].length >= 15) {
            noEA.push(input[i]);
        }
    }
    return noEA;
}
console.log(noEA(allTxt));

// What are all of the words that have a B and an X and are less than 5 letters long?
function noBX (input) {
    var noBX = [];
    for (var i = 0; i < input.length; i++) {
        if (!input[i].includes("B") && !input[i].includes("X") && input[i].length < 5) {
            noBX.push(input[i]);
        }
    }
    return noBX;
}
console.log(noBX(allTxt));

// What are all of the words that both start and end with a Y?
function startEnd (input) {
    var startEnd = [];
    for (var i = 0; i < input.length; i++) {
        if (input[i].startsWith("Y") && input[i].endsWith("Y")) {
            startEnd.push(input[i]);
        }
    }
    return startEnd;
}
console.log(startEnd(allTxt));

// What are all of the words with no vowel and not even a Y?
function noVowel(input) {
    var noVowels = [];
    for (var i = 0; i < input.length; i++) {
        if (!input[i].includes("A") && !input[i].includes("E") && !input[i].includes("I") && !input[i].includes("O") && !input[i].includes("U") && !input[i].includes("Y")) {
            noVowels.push(input[i]);
        }
    }
    return noVowels;
}
console.log(noVowel(allTxt));

// What are all of the words that have all 5 vowels, in any order?
    function allVowel(input) {
        var allVowels = [];
        for (var i = 0; i < input.length; i++) {
            if (input[i].includes("A") && input[i].includes("E") && input[i].includes("I") && input[i].includes("O") && input[i].includes("U")) {
                allVowels.push(input[i]);
            }
        }
        return allVowels;
    }
    console.log(allVowel(allTxt));

function AEIOU(input) {
    let vowels = [];
    let alphabetical = [];
    for (let i = 0; i < input.length; i++) {
        if (input[i].includes('A') && input[i].includes('E') && input[i].includes('I') && input[i].includes('O') && input[i].includes('U')) {
            vowels.push(input[i]);
            // console.log(vowels);
        }
    }
    // check to see if the letter A comes before the letter E in the word, and the E comes before the I and the I comes before the O and the O comes before the U
    for (let i = 0; i < vowels.length; i++) {
        if (vowels[i].indexOf('A') < vowels[i].indexOf('E') && vowels[i].indexOf('E') < vowels[i].indexOf('I') && vowels[i].indexOf('I') < vowels[i].indexOf('O') && vowels[i].indexOf('O') < vowels[i].indexOf('U')) {
            alphabetical.push(vowels[i]);
        }
    }
    return alphabetical;
}
console.log(AEIOU(allTxt));

// Setting up storage to use during a for loop, including counters and arrays
// How many words contain the substring "TYPE”?
function subType(input) {
    var typeArr = [];
    for (var i = 0; i < input.length; i++) {
        if (input[i].includes("TYPE")) {
            typeArr.push(input[i]);
        }
    }
    return typeArr;
}
console.log(subType(allTxt));

// Create and print an array containing all of the words that end in "GHTLY"
    function endGHTLY(input) {
        var endsIn = [];
        for (var i = 0; i < input.length; i++) {
            if (input[i].includes("GHTLY")) {
                endsIn.push(input[i]);
            }
        }
        return endsIn;
    }
    console.log(endGHTLY(allTxt));

// What is the shortest word that contains all 5 vowels?
    function shortVowel(input) {
        var allVowels = [];
        var shortWord = [];
        var shortVowel = [0];
        for (var i = 0; i < input.length; i++) {
            if (input[i].includes("A") && input[i].includes("E") && input[i].includes("I") && input[i].includes("O") && input[i].includes("U")) {
            allVowels.push(input[i]);
            }
                for (var j = 0; j < allVowels.length; j++) {
                    if (allVowels.length > shortVowel.length) {
                    shortWord = allVowels[j];
                    return shortWord;
                } 
            }
        } 
    }
    console.log(shortVowel(allTxt));
       
// What is the longest word that contains no vowels?
        function noVowel(input) {
        var noVowels = [];
        var longWord = [];
        var longLength = [0];
        for (var i = 0; i < input.length; i++) {
            if (!input[i].includes("A") && !input[i].includes("E") && !input[i].includes("I") && !input[i].includes("O") && !input[i].includes("U")) {
            noVowels.push(input[i]);
            }
                for (var j = 0; j < noVowels.length; j++) {
                    if (longLength.length < noVowels.length) {
                    longWord = noVowels[j];
                    return longWord;
                } 
            }
        } 
    }
    console.log(noVowel(allTxt));

// Which of the letters Q, X, and Z is the least common?
    function leastCommon(input) {
        var leastCommon = [];
        var leastCommonLetter = [];
        var leastCommonLetterCount = [0];
        for (var i = 0; i < input.length; i++) {
            if (input[i].includes("Q")) {
                leastCommon.push("Q");
            } else if (input[i].includes("X")) {
                leastCommon.push("X");
            } else if (input[i].includes("Z")) {
                leastCommon.push("Z");
            }
        }
        for (var j = 0; j < leastCommon.length; j++) {
            if (leastCommon.length > leastCommonLetterCount.length) {
                leastCommonLetter = leastCommon[j];
                return leastCommonLetter;
            }
        }
    }
    console.log(leastCommon(allTxt));


// What is the longest palindrome?
function longestPalindrome(input) {
   var palindrome = [];
    // console.log(input);
    for (var i = 0; i < input.length; i++) {
        var splitter = input[i].split('').join('');
        var reverse = input[i].split('').reverse().join('');
        if (splitter === reverse) {
            palindrome.push(splitter);
        }
    }
    return palindrome;
   }
console.log(longestPalindrome(allTxt));
      
// What are all of the letters that never appear consecutively in an English word? For example, we know that “U” isn’t an answer, because of the word VACUUM, and we know that “A” isn’t an answer, because of “AARDVARK”, but which letters never appear consecutively?
function noConsec(input) {
var noConsec = [];
var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// iterate over the entire array
for (var i = 0; i < input.length; i++) {
    // split the string into an array of characters
    var split = input[i].split('');
    // iterate over the array of characters
    for (var j = 0; j < split.length; j++) {
        // if any character is the same as the next character, push that character to the noConsec array
        if (split[j] === split[j + 1]) {
            noConsec.push(split[j]);
        }
    }
}
// iterate over the alphabet
for (var k = 0; k < alphabet.length; k++) {
    // if the alphabet character is not in the noConsec array, return that character
    if (noConsec.indexOf(alphabet[k]) === -1) {
        return alphabet[k];
    }
}
}
console.log(noConsec(allTxt));




