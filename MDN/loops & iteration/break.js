/*
break statement
Use the break statement to terminate a loop, switch, or in conjunction with a labeled statement.

When you use break without a label, it terminates the innermost enclosing while, do-while, for, or switch immediately and transfers control to the following statement.
When you use break with a label, it terminates the specified labeled statement.
The syntax of the break statement looks like this:

break;
break label;
The first form of the syntax terminates the innermost enclosing loop or switch.
The second form of the syntax terminates the specified enclosing labeled statement.
*/



// Breaking to a label
let x = 0;
let z = 0;
labelCancelLoops: while (true) {
  console.log('Outer loops: ', x);
  x += 1;
  z = 1;
  while (true) {
    console.log('Inner loops: ', z);
    z += 1;
    if (z === 10 && x === 10) {
      break labelCancelLoops;
    } else if (z === 10) {
      break;
    }
  }
}
