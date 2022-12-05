# Principle of Recursion

Recursion is an approach to solving problems using a function that calls itself as a subroutine.

You might wonder how we can implement a function that calls itself. The trick is that each time a recursive function calls itself, it reduces the given problem into subproblems. The recursion call continues until it reaches a point where the subproblem can be solved without further recursion.

A recursive function should have the following properties so that it does not result in an infinite loop:

A simple base case (or cases) — a terminating scenario that does not use recursion to produce an answer.
A set of rules, also known as recurrence relation that reduces all other cases towards the base case.
Note that there could be multiple places where the function may call itself.


[Recursion Video](https://www.youtube.com/watch?v=6oDQaB2one8)

<br>

![recursion](recursion.jpg)

<br>

And now that you have a basic idea of recursion, you should practice a few different problems that use recursion.  
    [Fibonacci](https://leetcode.com/problems/fibonacci-number)  
    [Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists)  
    [Power of Two](https://leetcode.com/problems/power-of-two)  
    [All Leetcode Recursion Problems](https://leetcode.com/tag/recursion/)  

## Note
Still struggling with recursion? Here's a tip. Any time you write a recursive function add a "spacing" parameter that is of type String. Give this parameter a default value of an empty string, "". Print the data you are working with at the beginning of the function, but make sure you put the spacing string at the front of the print statement. Before you call the function inside of itself, add two spaces to the spacing and pass that through. This way, as you move deeper and deeper into the recursive calls you will be able to track how deep you are, and what the state of the data is at that point.


















```swift
function recursiveFunction(data, "") {
    if (data < 5) {
        print("\(spacing)\(data) Base case.")
        return
    }
    print("\(spacing)\(data)")
    recursiveFunction(data: data - 1, spacing: spacing + "      ")
    print("\(spacing)\(data) Other stuff happens.")
}

recursiveFunction(data, 10)
```

This will print the output below:  
```
10
      9
            8
                  7
                        6
                              5
                                    4 Base case.
                              5 Other stuff happens.
                        6 Other stuff happens.
                  7 Other stuff happens.
            8 Other stuff happens.
      9 Other stuff happens.
10 Other stuff happens.
```
If this isn't helpful, you can ask your mentor, hit me up directly (@Dan M on Slack), or ask in the general Slack channel. You can also just ignore it! 😉