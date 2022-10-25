// linked list is made up of many nodes

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');

a.next = b;
b.next = c;
c.next = d;

// A -> B -> C -> D -> NULL
// cur
// const printLinkedList = (head) => {
//   // initialize the head of the linked list
//   let current = head;
//   // iterate through the list
//   while (current !== null) {
//     console.log(current.val);
//     // current is reassigned to the next node
//     current = current.next;
//   }
// };

// printLinkedList(a);
/*
A
B
C
D
*/


// A -> B -> C -> D -> NULL
// head
// frame the same but recursively
const printLinkedList = (head) => {
  // base case- is head equal to null
  if (head === null) return;
  console.log(head.val);
  // recursively call to the next head until head is equal to null
  printLinkedList(head.next);
};
printLinkedList(a);
/*
A
B
C
D
*/
