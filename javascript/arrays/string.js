/*
Transforming an Array into a String
Let us consider the case of wanting to transform an array into a string
We can do so using the .join() method
var joinedOnNothing = ["a", "b", "c"].join();
console.log('joined with no argument supplied:', joinedOnNothing);
var joinedOnEmptyString = ["a", "b", "c"].join("");
console.log('joined on an empty string:', joinedOnEmptyString);
var joinedOnAString = ["a", "b", "c"].join("-");
console.log('joined on a string:', joinedOnAString);
We can also do so with variables:
*/

var listOfCountingSequence = [1, 2, 3, 4, 5];
var countingSequence = listOfCountingSequence.join();
console.log('counting sequence:', countingSequence);
var lettersInWord = ['M', 'e', 'r', 'g', 'e', 's', 'o', 'r', 't'];
var joiner = "";
var joinedWord = lettersInWord.join(joiner);
console.log('word after joining on empty string:', joinedWord);
var wordsInSentence = ['I', 'am', 'learning', 'to', 'code'];
var joiner = ' ';
var joinedSentece = wordsInSentence.join(joiner);
console.log('sentence after joining on a space:', joinedSentece);