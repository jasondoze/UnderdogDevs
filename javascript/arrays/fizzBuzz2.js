/*
What is FizzBuzz?
Firstly, let’s get this out of the way, FizzBuzz is a task where the programmer 
is asked to print numbers from 1 to 100, but here’s the catch, multiples of three 
should print “Fizz” and similarly print “Buzz” for multiples of 5 and lastly print 
“FizzBuzz” for multiples of three and five.

Although the last may seem straightforward, even seasoned programmers tend to get 
the logic wrong at times.
*/

const fizzBuzz = (num) => {
  for (i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
};

console.log(fizzBuzz(100));
