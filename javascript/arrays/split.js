/*
Transforming a String into an Array
Let us consider the case of wanting to transform a string into an array
We can do so using the .split() method
var splitOnNothing = "abc".split();
console.log('split with no argument supplied:', splitOnNothing);
var splitOnEmptyString = "abc".split("")
console.log('split on an empty string:', splitOnEmptyString);
var splitOnAString = "a-b-c".split("-");
console.log('split on a string:', splitOnAString);
We can also do so with variables:
*/

var generatedID = 'a1d8b5q9';
var arrayVersionOfId = generatedID.split();
console.log('array with one ID:', arrayVersionOfId);
console.log('========================================')


var word = 'Networking';
var separator = '';
var lettersInWord = word.split(separator);
console.log('letters in word:', lettersInWord);
console.log('========================================')


var sentence = 'Approaching the end of operators and methods';
var separator = ' ';
var wordsInSentence = sentence.split(separator);
console.log('words in sentence:', wordsInSentence);