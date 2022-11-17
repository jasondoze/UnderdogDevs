/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Input: s = "anagram", t = "nagaram"
Output: true


Input: s = "rat", t = "car"
Output: false
*/

const isAnagram = (s, t) => {
  if (s.length !== t.length) {
    return false;
  }
  return [...s].sort().join('') === [...t].sort().join('');
};

console.log(isAnagram('rat', 'cat'));
console.log(isAnagram('anagram', 'nagaram'));
