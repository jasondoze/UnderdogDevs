// https://medium.com/code-and-chill/building-a-singly-linked-list-with-javascript-8427733361f8

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
/*

define a singly-linked list class. It will have a pointer to the head, a pointer to the tail, and a length. The length will be initialized as 0, and the head and tail will be null. In the next sections, we will add methods to this class to handle different functions. Each method has some edge cases (e.g. if the length is 0, etc.), so please see the code to check for different cases.
*/

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // adding a node to the end of the Linked List. Push will add a new node to the end of the linked list
  push(value) {
    // create a new node with this value
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      // the next property of the current tail will be set to the new node
      this.tail.next = newNode;
      // the tail property of the list will be set to the new node
      this.tail = newNode;
    }
    // length will also be increased by one and return the list
    this.length++;
    return this;
  }

  // removing a node from the end of the Linked List
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    /*
    Before we remove the last node, we first need to find the second to last node because we need to set this to be the new tail. To do this we need to loop through the list, then set the next property of the second to the last node to be null
    set the tail of the linked list to be the second to the last node
    */

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    // decrease the length by one and return the value of the removed node
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  // Removing a node from the beginning of the Linked List This will remove a node from the beginning of the linked list. All we need to do is set the current head’s next property the new head, decrease the length by 1, and return the removed node.
  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }

  /* Adding a node to the beginning of the Linked List
  This will add a node to the beginning of the linked list. The unshift method will take in a value, and we will first create a new node with this value. Then we will set the next property of the new node to be the current head, then set the head property of the linked list to be the new node. Finally, we will increase the length by one and return the linked list.
  */

  unshift(value) {
    let newNode = newNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
}
const linked = new SinglyLinkedList();
console.log(linked.push(100));
console.log(linked.push(200));

console.log(linked.pop(300));
