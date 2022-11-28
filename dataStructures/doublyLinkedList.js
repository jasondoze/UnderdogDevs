// https://javascript.plainenglish.io/doubly-linked-lists-with-javascript-9c20a9dc4fb3

class Node {
  constructor(value) {
    this.value = value;
    this.previous = null;
    this.next = null;
  }
}
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // The push method will take a value as an argument and we will first create a new node with that value, which we are saving here as newNode
  push(value) {
    // create a newNode with value named newNode
    const newNode = new Node(value);
    // check edge case if the newNode is empty
    // do this by checking if there is no head, or if the length is equal to 0
    if (this.length === 0) {
      // If so, then we will simply set the head and the tail of the list to the newNode
      this.head = newNode;
      this.tail = newNode;
    } else {
      // if not emtpy
      this.tail.next = newNode; // set the next property on the current tail to the newNode
      newNode.previous = this.tail; // set the previous property on the newNode to be the current tail
      this.tail = newNode; // set the tail property of the list to be the newNode
    }
    this.length++;
    return this;
  }

  pop() {
    // removing a node from the end
    // the pop method will have two edge cases
    if (this.length === 0) return undefined; // if the list is empty, we return undefined
    // In other cases, we first need to store the current tail in a temporary variable so we do not lose the reference to it
    const temp = this.tail;
    // if the length of the list is equal to 1
    if (this.length === 1) {
      // we remove that node, and set the head and tail properties of the list to null
      this.head = null;
      this.tail = null;
    } else {
      // set the tail of the list to equal the previous node of the current tail
      this.tail = temp.previous;
      //then sever the ties between the new tail and the old tail
      this.tail.next = null; // set the next of the new tail to be null
      temp.previous = null; // set the previous of the old tail (stored as temp) to be null
    }
    // decrease the length by 1 and return the old tail.
    this.length--;
    return temp;
  }
  // removing a node from the beginning
  // the shift method is similar to the pop method, except we work with the head, not the tail
  shift() {
    // check edge cases for length being equal to 0 and equal to 1
    if (this.length === 0) return undefined;
    // store the current head in a temporary variable
    const temp = this.head;
    // we remove that node, and set the head and tail properties of the list to null
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      // set the new head of the list to be the next value of the old head
      this.head = temp.next;
      // sever the ties between the old and new head
      // set the previous value of new head to null
      // set the next value of old head (temp) to be null
      this.head.previous = null;
      temp.next = null;
    }
    // decrease the length of the list by 1 and return the old head
    this.length--;
    return temp;
  }

  // Unshift (Adding a node to the beginning)
  // Just like shift was similar to pop, unshift is similar to push, except with the head rather than the tail

  unshift(value) {
    // The unshift method takes one argument, and create a new node with that value
    const newNode = new Node(value);
    // first check for the edge case of an empty list
    if (this.head === 0) {
      // If so, we will set the head and the tail properties of the list to be the new node
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Otherwise, we will set the next value of the new node to be the old head
      newNode.next = this.head;
      // set the previous value of the old head to be the new node
      this.head.previous = newNode;
      // set the head of the list to be the new node
      this.head = newNode;
    }
    // increase the length by 1 and return the list
    this.length;
    return this;
  }
    // clear list
    clearList() {
      this.head = null;
      this.size = 0;
  }
  // print list data
}

let list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
console.log(list);
