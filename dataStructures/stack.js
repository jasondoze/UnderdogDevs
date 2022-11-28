// // https://medium.com/p/eeb33ae4c93c

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  // add element to top of stack
  push(value) {
    let newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      newNode.next = temp;
    }
    this.length++;
    return this.length;
  }

  // return and remove top element in stack
  // return undefined if stack is empty
  pop() {
    if (this.length === 0) return null;
    let removed = this.first;
    if (this.length === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = removed.next;
    }
    this.length--;
    return removed.value;
  }
}
let stack = new Stack();

stack.push('google');
stack.push('medium');
stack.push('youtube');

stack.pop();
