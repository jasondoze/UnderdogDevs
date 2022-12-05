# Built-in Object Methods
In the previous exercises we’ve been creating instances of objects that have their own methods. But, we can also take advantage of built-in methods for Objects!

For example, we have access to object instance methods like: .hasOwnProperty(), .valueOf(), and many more! Practice your documentation reading skills and check out: MDN’s object instance documentation.

There are also useful Object class methods such as Object.assign(), Object.entries(), and Object.keys() just to name a few. For a comprehensive list, browse: MDN’s object instance documentation.

Let’s get acquainted with some of these methods and their documentation.

Note: You will see errors as you work through this exercise, but by the end the errors will be fixed!


In main.js there is an object, robot. We’d like to grab the property names, otherwise known as keys, and save the keys in an array which is assigned to robotKeys. However, there’s something missing in the method call.

Find out what we have to include by reading MDN’s Object.keys() documentation.

`const robotKeys = Object.keys(robot);`

<br>

Object.entries() will also return an array, but the array will contain more arrays that have both the key and value of the properties in an object.

<br>

Declare a const variable named robotEntries and assign to it the entries of robot by calling Object.entries().

`const robotEntries = Object.entries(robot);`

<br>

Now what if we want another object that has the properties of robot but with a few additional properties. Object.assign() sounds like a great method to use, but like the previous examples we should check Object.assign() documentation at MDN.

<br>

Declare a const variable named newRobot. newRobot will be a new object that has all the properties of robot and the properties in the following object: {laserBlaster: true, voiceRecognition: true}. Make sure that you are not changing the robot object!

<br>
The Object.assign() method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.

```
const source = {laserBlaster: true, voiceRecognition: true};
const newRobot = Object.assign(source, robot)
```

<br>

## Syntax
`Object.assign(target, ...sources)`

## Parameters
### target
The target object — what to apply the sources' properties to, which is returned after it is modified.

### sources
The source object(s) — objects containing the properties you want to apply.