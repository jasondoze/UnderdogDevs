<!-- Homework: read wikipedia on Big O notation -->
Big O notation 

Here's my favorite Big O analogy: Let's say you're making dinner for your family. O is the process of following a recipe, and n is the number of times you follow a recipe. O- you make one dish that everyone eats whether they like it or not. You follow one recipe from top to bottom, then serve (1recipe). <-- How I grew up O(n) - you make individual dishes for each person. You follow a recipe from top to bottom for each person in your family (recipe times the number of people in your family). O(n^2) - you make individual dishes redundantly for every person. You follow all recipes for each person in your family (recipe times the number of people squared). O (log n) - you break people into groups according to what they want and make larger portions. You make one dish for each group (recipe times request)


 curl -L 'https://www.dropbox.com/s/k6xcq55tqanbdmz/countries.txt?dl=0' 

 curl -L 'https://www.dropbox.com/s/k6xcq55tqanbdmz/countries.txt?dl=0' > curlCountries.txt

 curl -L 'https://www.dropbox.com/s/k6xcq55tqanbdmz/countries.txt?dl=0'

 curl -L 'https://www.dropbox.com/s/k6xcq55tqanbdmz/countries.txt?dl=0' | grep United

 man grep
 
 curl -L 'https://www.dropbox.com/s/k6xcq55tqanbdmz/countries.txt?dl=0' | grep "^U"


// function oneVowel(input) {
//   let vowels = ["a", "e", "i", "o", "u"];
//   let result = [];
//   let firstVowel = undefined;
//   let hasOneVowel = false;
//   for (let i = 0; i < input.length; i++) {
//       const word = input[i];
//     //   console.log(word);
//     for (let j = 0; j < word.length; j++) {
//         const letter = word[j];
//         // console.log(letter);
//       if (vowels.includes(letter)) {
//           firstVowel = letter;
//         //   console.log(firstVowel);
//         hasOneVowel = true;
//       } else if (letter !== firstVowel) {
//         hasOneVowel = false;
//         continue;
//       }
//     }
//     if (hasOneVowel) {
//       result.push(word);
//     }
//   }
//   return result;
// }
// console.log(oneVowel(textByLine));

| more 

Depth First Traversal: follows nodes in a single line- uses a STACK that adds/removes from the top

Breadth First Traversal follows nodes in all directions evenly- uses a QUEUE that follows first in first out



ES6 

now has block scope, and this is one of the new features that I and many others are very excited about. In ES5 all we had was function scope, and people came up with all manners of managing scope by way of esoteric and complex patterns like the IIFE Immediately Invoked Function Expression – Pronounced “iffy”.

The Temporal Dead Zone
'use strict';
function updateUserId() {
    userid = 1234;
}
let userid = null;
updateUserId();
console.log(userid);

// 1234

We declare a function and assign the value of 1234 to the userid variable in that function. Note userid has not been officially declared yet. After the function, we declare userid and set it to null using let. updateUserId() get’s called, then we log out the value of userid. The result of this call to console.log is 1234. This is because the use of userid in the function happens in the Temporal Dead Zone. The compiler makes note of userid in the function even though it is not declared yet, and this is why it still works and logs out 1243.