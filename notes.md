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