//Write a function to find the longest common prefix string amongst an array of strings
function longestCommonPrefix(array) {
  // create a variable to store the longest common prefix
  let prefix = array[0];
  // loop through the array
  for (let i = 0; i < array.length; i++) {
    // create a variable to store the current string
    let currentString = array[i];
    // while the current prefix is not the same length as the current string in the array
    while (currentString.indexOf(prefix) !== 0) {
      // remove the last character from the prefix
      prefix = prefix.slice(0, prefix.length - 1);
      // console.log(prefix);
    }
    // if the prefix is empty, return an empty string
    if (prefix === "") {
      return "";
    }
  }
  return prefix;
}
console.log(longestCommonPrefix(["flower", "flow", "flowe", "flowery"]));
//Example 1:
// Output: "flow"

// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
