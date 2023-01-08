const words = require('fs')
  .readFileSync('../sowpods.txt')
  .toString()
  .toLowerCase()
  .split('\n');

/* What are all of the words that have all 5 vowels, in alphabetical order?
The first character in the regular expression is an a, which matches the letter 'a' in the string being searched.

Then, there is a character class [^eiou], which matches any character that is not an 'e', 'i', 'o', or 'u'. The caret (^) inside the square brackets ([]), called a negated character class, matches any character that is not in the set of characters specified. This character class is followed by an asterisk (*), which is a quantifier that matches zero or more of the preceding character. This means that the regular expression will match any number of characters between the 'a' and the 'e', as long as they are not vowels.

Next, there is an e character, which matches the letter 'e' in the string. This is followed by another character class [^aiou] and an asterisk, which works in the same way as the previous character class and quantifier. This will match any number of characters between the 'e' and the 'i', as long as they are not vowels.

The pattern continues with an i, o, and u, each followed by a character class and an asterisk. The regular expression will match any number of characters between each of these letters, as long as they are not vowels.

Overall, this regular expression will match a string that contains the letters 'a', 'e', 'i', 'o', and 'u' in that order, with no other vowels appearing between them.
*/

const all5 = (array) => {
  const allVowels = /a[^eiou]*e[^aiou]*i[^aeou]*o[^aeio]*u/g;
  return array.filter((word) => word.match(allVowels));
};
console.log(all5(words));
