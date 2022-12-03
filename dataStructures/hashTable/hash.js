// set to store a key-value pair
// get to retrieve a value given its key
// remove to delete a key value pair

// create a class with table and size properties
class HashTable {
  constructor() {
    // create a table of buckets with the size of 127
    this.table = new Array(127);
    this.size = 0;
  }
  /* key/value pairs will be stored inside the table property
create the hash would be to sum the ASCII code of the characters in the key using the charCodeAt() method as follows. Note that the method is named using _ to indicate that it's a private class
*/

  /* create the hash() method that will accept a key value and transform it into an index. /* 
  since the HashTable class only has 127 buckets, this means that the _hash() method must return a number between 0 and 127,
*/
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    // ensure that the hash value doesn't exceed the bucket size, you need to use the modulo operator
    return hash % this.table.length;
  }

  /*
How to write the set() method
To set the key/value pair in your Hash Table, you need to write a set() method that accepts  (key, value) as its parameters:

The set() method will call the _hash() method to get the index value.
The [key, value] pair will be assigned to the table at the specified index
Then, the size property will be incremented by one
*/

  set(key, value) {
    const index = this._hash(key);
    this.table[index] = [key, value];
    this.size++;
  }

  /* 
How to write the get() method
To get a certain value from the Hash Table, you need to write a get() method that accepts a key value as its parameter:

The method will call the _hash() method to once again retrieve the table index
Return the value stored at table[index]
*/
  get(key) {
    const target = this._hash(key);
    return this.table[target];
  }
  /*
This way, the get() method will return either the key/value pair back or undefined when there is no key/value pair stored in the specified index.

How to write the remove() method
To delete a key/value pair from the Hash Table, you need to write a remove() method that accepts a key value as its parameter:

Retrieve the right index using the _hash() method
Check if the table[index] has a truthy value and the length property is greater than zero. Assign the undefined value to the right index and decrement the size property by one if it is.
If not, simply return false
*/

  remove(key) {
    const index = this._hash(key);
    if (this.table[index] && this.table[index].length) {
      this.table[index] = [];
      this.size--;
      return true;
    } else {
      return false;
    }
  }
}
/*
create a new instance of the class and set some key/value pairs 
*/
const hashT = new HashTable();
hashT.set('Canada', 33);
hashT.set('France', 78);
hashT.set('Spain', 76);
hashT.set('ǻ', 192);

// retrieve using get
console.log(hashT.get('Canada'));
console.log(hashT.get('France'));
console.log(hashT.get('Spain'));
// [ 'Canada', 33 ]
// [ 'France', 78 ]
// [ 'Spain', 76 ]

// console.log(hashT.remove('Spain'));
// true
// console.log(hashT.get("Spain"))
// []


console.log(hashT.get('Spain'));
console.log(hashT.get('ǻ'));
// [ 'Canada', 33 ]
// [ 'France', 78 ]
// [ 'ǻ', 192 ]
// [ 'ǻ', 192 ]
// [ 'ǻ', 192 ]

/*
How to Handle Index Collision
Sometimes, the hash function in a Hash Table may return the same index number. In the test case above, the string "Spain" and "ǻ" both return the same hash value because the number 507 is the sum of both of their ASCII code.

To handle the index number collision, you need to store the key/value pair in a second array so that the end result looks as follows:

To create the second array, you need to update the set() method so that it will:

Look to the table[index] and loop over the array values.
If the key at one of the arrays is equal to the key passed to the method, replace the value at index 1 and stop any further execution with the return statement.
If no matching key is found, push a new array of key and value to the second array.
Else, initialize a new array and push the key/value pair to the specified index
Whenever a push() method is called, increment the size property by one.
*/