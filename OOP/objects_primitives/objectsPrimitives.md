# Value and Reference Types

## Value Types
* number
* string
* boolean
* symbol
* undefined
* null

## Reference Types
* object
* function
* array

![reference](reference.png)

<br>

### Primitives are copied by their value

<br>

### Objects copied by their reference

<br>

## Pass By Reference
Objects are passed by reference. This means when we pass a variable assigned to an object into a function as an argument, the computer interprets the parameter name as pointing to the space in memory holding that object. As a result, functions which change object properties actually mutate the object permanently (even when the object is assigned to a const variable).