/*
do...while statement
The do...while statement repeats until a specified condition evaluates to false.

A do...while statement looks as follows:

do
  statement
while (condition);
statement is always executed once before the condition is checked. (To execute multiple statements, use a block statement ({ }) to group those statements.)

If condition is true, the statement executes again. At the end of every execution, the condition is checked. When the condition is false, execution stops, and control passes to the statement following do...while.

*/

let i = 0;

do {
  i += 1;
  console.log(i);
} while (i < 5);

let n = 0;
let x = 0;
while (n < 3) {
  n++;
  x += n;
  console.log(n, x);
}
