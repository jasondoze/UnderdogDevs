// Given a string containing brackets, determine if all brackets have a matching counterpart. If all brackets in the string form balanced pairs, return true. If not, return false”

const isBalanced = (string) => {
  // create array to add and remove ()
  const stack = [];
  for (let char of string) {
    // if its an (
    if (char === '(') {
      // add it to the array
      stack.push(char);
      // else remove the last item
    } else if (stack.pop !== '(') {
      return false;
    }
  }
  // check if the stack is empty, if its empty it is balanced
  if (stack.length !== 0) return false;

  // it is balanced
  return true;
};

// balanced parens
console.log(isBalanced(''));
console.log(isBalanced('()'));
console.log(isBalanced('(())'));
console.log(isBalanced('()()(())'));

// not balanced parens
console.log(isBalanced(' '));
console.log(isBalanced('('));
console.log(isBalanced(')'));
console.log(isBalanced(')()('));
console.log(isBalanced('(()))'));
