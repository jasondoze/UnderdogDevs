/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:

Input: strs = [""]
Output: [[""]]
Example 3:

Input: strs = ["a"]
Output: [["a"]]

You can follow along with my numbered markers which are pointers to comments in the code block

Just general validations & checks
Using Map() because most of the operations I'll be using are O(1), you could opt for a dictionary using an object but you'll see in step 5 we optimize for speed
We loop over every word
We create 2 variables, 1 is the word, 1 is the word but sorted alphabetically
worst O(n^2)
avg O(n log(n))
The magic of our Map() is here
If our sorted word matches any existing sorted word (which makes it an anagram) then we add it to our anagram list
If our sorted word doesn't match anything, add a new entry to the map
The key would be the sorted word
The value would be an array of the word eg. ["word"]
Map().size is an O(1) solution of getting the length vs Object.entries(...).length is an O(n) because of converting an object to an array
get(), has(), push() and set() are all O(1)
The only added benefit of using this over a dictionary is readability and the size prototype from Map()
We'll have all our results stored in our Map(), we just iterate over all our results and put them into 1 array then return that!
*/

const groupAnagrams = (strings) => {
  if (strings.length === 0) return [];
  if (strings.length === 1) return [strings];

  const words = new Map();
  for (let i = 0; i < strings.length; i++) {
    const word = strings[i];
    const wordSorted = [...word].sort().join('');

    if (words.size > 0 && words.has(wordSorted)) {
      words.get(wordSorted).push(word);
    } else {
      words.set(wordSorted, [word]);
    }
  }
  const result = [];

  for (const [_, list] of words.entries()) {
    result.push(list);
  }
  return result;
};
console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
console.log(groupAnagrams(['']));
console.log(groupAnagrams(['a']));
