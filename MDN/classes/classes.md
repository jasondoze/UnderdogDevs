# Classes

```
const bigDay = new Date(2019, 6, 19);
console.log(bigDay.toLocaleDateString());
if (bigDay.getTime() < Date.now()) {
  console.log("Once upon a time...");
}
```


On the first line, we created an instance of the class Date, and called it bigDay. On the second line, we called a method toLocaleDateString() on the bigDay instance, which returns a string. Then, we compared two numbers: one returned from the getTime() method, the other directly called from the Date class itself, as Date.now().

Date is a built-in class of JavaScript. From this example, we can get some basic ideas of what classes do:

* Classes create objects through the new operator.

* Each object has some properties (data or method) added by the class.
  
* The class stores some properties (data or method) itself, which are usually used to interact with instances.

These correspond to the three key features of classes:

* Constructor;
* Instance methods and instance fields;
* Static methods and static fields.

## Declaring a class
Classes are usually created with class declarations.

```
class MyClass {
  // class body...
}
```
<br>

# Constructing a class
After a class has been declared, you can create instances of it using the new operator.

```
const myInstance = new MyClass();
console.log(myInstance.myField); // 'foo'
myInstance.myMethod();
```

Within a class body, there are a range of features available.

# Constructor
Perhaps the most important job of a class is to act as a "factory" for objects. For example, when we use the Date constructor, we expect it to give a new object which represents the date data we passed in — which we can then manipulate with other methods the instance exposes. In classes, the instance creation is done by the constructor.

As an example, we would create a class called Color, which represents a specific color. Users create colors through passing in an RGB triplet.

As an example, we would create a class called Color, which represents a specific color. Users create colors through passing in an RGB triplet.

```
class Color {
  constructor(r, g, b) {
    // Assign the RGB values as a property of `this`.
    this.values = [r, g, b];
  }
}
```
<br>

You have successfully created a Color instance, and the instance has a values property, which is an array of the RGB values you passed in. That is pretty much equivalent to the following:

```
function createColor(r, g, b) {
  return {
    values: [r, g, b],
  };
}
```

<br>

The constructor's syntax is exactly the same as a normal function — which means you can use other syntaxes, like rest parameters:

```
class Color {
  constructor(...values) {
    this.values = values;
  }
}
```

`const red = new Color(255, 0, 0);`
// Creates an instance with the same shape as above.

<br>

Within a class constructor, the value of this points to the newly created instance. You can assign properties to it, or read existing properties (especially methods

The this value will be automatically returned as the result of new. You are advised to not return any value from the constructor — because if you return a non-primitive value, it will become the value of the new expression, and the value of this is dropped. (You can read more about what new does in its description.)

```
class MyClass {
  constructor() {
    this.myField = "foo";
    return {};
  }
}
```

`console.log(new MyClass().myField); // undefined`

<br>

# Instance methods
If a class only has a constructor, it is not much different from a createX factory function which just creates plain objects. However, the power of classes is that they can be used as "templates" which automatically assign methods to instances.

For example, for Date instances, you can use a range of methods to get different information from a single date value, such as the year, month, day of the week, etc. You can also set those values through the setX counterparts like setFullYear.

For our own Color class, we can add a method called getRed which returns the red value of the color.

```
class Color {
  constructor(r, g, b) {
    this.values = [r, g, b];
  }
  getRed() {
    return this.values[0];
  }
}

const red = new Color(255, 0, 0);
console.log(red.getRed()); // 255
```

<br>

Without methods, you may be tempted to define the function within the constructor:

```
class Color {
  constructor(r, g, b) {
    this.values = [r, g, b];
    this.getRed = function () {
      return this.values[0];
    };
  }
}
```

This also works. However, a problem is that this creates a new function every time a Color instance is created, even when they all do the same thing!

`console.log(new Color().getRed === new Color().getRed);` // false

<br>

In contrast, if you use a method, it will be shared between all instances. A function can be shared between all instances, but still have its behavior differ when different instances call it, because the value of this is different. If you are curious where this method is stored in — it's defined on the prototype of all instances, or Color.prototype, which is explained in more detail in Inheritance and the prototype chain.

Similarly, we can create a new method called setRed, which sets the red value of the color.

```
class Color {
  constructor(r, g, b) {
    this.values = [r, g, b];
  }
  getRed() {
    return this.values[0];
  }
  setRed(value) {
    this.values[0] = value;
  }
}

const red = new Color(255, 0, 0);
red.setRed(0);
console.log(red.getRed()); // 0; of course, it should be called "black" at this stage!
```

## Private fields
You might be wondering: why do we want to go to the trouble of using getRed and setRed methods, when we can directly access the values array on the instance?

```
class Color {
  constructor(r, g, b) {
    this.values = [r, g, b];
  }
}

const red = new Color(255, 0, 0);
red.values[0] = 0;
console.log(red.values[0]); // 0
```

<br>

There is a philosophy in object-oriented programming called **_"encapsulation"__*. This means you should not access the underlying implementation of an object, but instead use well-abstracted methods to interact with it. For example, if we suddenly decided to represent colors as HSL instead:

```
class Color {
  constructor(r, g, b) {
    // values is now an HSL array!
    this.values = rgbToHSL([r, g, b]);
  }
  getRed() {
    return this.values[0];
  }
  setRed(value) {
    this.values[0] = value;
  }
}

const red = new Color(255, 0, 0);
console.log(red.values[0]); // 0; It's not 255 anymore, because the H value for pure red is 0
```

<br>

The user assumption that values means the RGB value suddenly collapses, and it may cause their logic to break. So, if you are an implementor of a class, you would want to hide the internal data structure of your instance from your user, both to keep the API clean and to prevent the user's code from breaking when you do some "harmless refactors". In classes, this is done through private fields.

A private field is an identifier prefixed with # (the hash symbol). The hash is an integral part of the field's name, which means a private property can never have name clash with a public property. In order to refer to a private field anywhere in the class, you must declare it in the class body (you can't create a private property on the fly). Apart from this, a private field is pretty much equivalent to a normal property.

