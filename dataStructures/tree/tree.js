/*
Building a Binary Search Tree
First, let’s create our Node class and Binary Search Tree class. Our Node class constructor will take in a value, and we will set that as the value of the node. Then we will set left and right values to be null. Our Binary Search Tree class will have a root value which we will set to null.
*/

class Node {
  constructor(value) {
    this.value = value;
    // set the left node to null
    this.left = null;
    // set the rigth node to null
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    // set the root to null
    this.root = null;
  }

  /*
Inserting a Node
Let’s now handle how to insert nodes into our tree. We will create an insert method to our Binary Search Tree class which will take in a value. First, we will create a new Node with that value. There is one edge case, which is if the tree is empty (there is no root), then we will set the root of the tree to be the new node, return the tree, and we are done.

Otherwise, we need to compare the value of the new node, to the value of the root. Let’s first create a current variable to keep track of the node we are comparing to. Then, we will first handle the left side, in the case of which the value of the new node is less than the value of the current node.

We will set up a while loop, to continue to compare the new node value to the current node value. Once we insert the node in the correct spot in the tree, we can break out of the loop by returning the tree. If the current node does not have a left value, we will set the value as the new node and return the tree. Else, we need to update the current node to be the left node (remember, the current node is what we are comparing to).

*/

  insert(value) {
    const newNode = new Node(value);
    // if the tree is empty, there is no root
    if (!this.root) {
      // set the root of the tree to new node
      this.root = newNode;
      // return the tree
      return this;
      // else, we need to compare the value of the new node, to the value of the root.
    } else {
      // first create a current variable to keep track of the node we are comparing to
      let current = this.root;
      // set up a while loop, to continue to compare the new node value to the current node value
      while (true) {
        // if the new node value is equal to a value already in the tree, return undefined
        if (value === current.value) return undefined;
        // first handle the left side in which the value of the new node is less than the value of the current node
        if (value < current.value) {
          // If the current node does not have a left value, we will set the value as the new node and return the tree
          if (!current.left) {
            current.left = newNode;
            return this;
            // else, we need to update the current node to be the left node (remember, the current node is what we are comparing to).
          } else {
            current = current.left;
          }
          /*
Then we need to handle the right side, in the case where the new node is greater than the current node. We will do the same checks as above, except for the right side. If there is no right node, we will set the right node to be the new node and return the tree. Else, we will update the current node to be the right node.
*/
        } else if (value > current.value) {
          // If there is no right node, we will set the right node to be the new node and return the tree
          if (!current.right) {
            current.right = newNode;
            return this;
            // Else, we will update the current node to be the right node.
          } else {
            current = current.right;
          }
        }
      }
    }
  }
  /*
Finding a Node
The second method we will add to our Binary Search Tree class is how to check if a value exists in our tree. Let’s name this method find, and it will take in a value as the argument. This value will be what we are searching for in our tree. Similar to the insert method, we will first check if our tree is empty (there is no root). If so, then we will simply return undefined.
*/

  find(value) {
    // if no root exitsts return undefined
    if (!this.root) return undefined;
    // current variable will be to help us keep track of our position in the tree
    let current = this.root;
    // found variable will be to let us know if we find the value.
    let found = false;
    // our while loop will run as long as there is a current value, and we have not found the node
    while (current && !found) {
      /* We will break out of our loop in two cases:
      if we find the node, we will set found to be true.
      if there is no current value, it means our tree does not contain the node
      */
      //check if the value we are searching for is less than the current value
      if (value < current.value) {
        // if so, we will move to the left in our tree by setting the current value to current.left
        current = current.left;
        // if the value we are searching for is greater than the current value
      } else if (value > current.value) {
        // we will set the current to current.right
        current = current.right;
      } else {
        // if the value is equal to the current value, we have found our node and we will set found to equal true.
        found = true;
      }
    }
    // after our while loop, if found is still equal to false, this means the value is not in our tree and we will return undefined. else, we will return the node with the value we were searching for by returning current.
    if (!found) return undefined;
    return current;
  }
  /*
Otherwise, we will be handling this with a while loop. To start we will create two variables, current, and found. The current variable will be to help us keep track of our position in the tree, and the found variable will be to let us know if we find the value.

Our while loop will run as long as there is a current value, and we have not found the node. We will break out of our loop in two cases:

If we find the node, we will set found to be true.
If there is no current value, it means our tree does not contain the node.
Let’s first check if the value we are searching for is less than the current value. If so, we will move to the left in our tree by setting the current value to current.left. Then we will do the same thing for the right side. If the value we are searching for is greater than the current value, we will set the current to current.right. Finally, if the value is equal to the current value, we have found our node and we will set found equal to true.

After our while loop, we will do one final check. If found is still equal to false, this means the value is not in our tree and we will return undefined. Else, we will return the node with the value we were searching for by returning current.
*/
}

// now insert values into the tree using tree.insert(value) and check if the tree contains a value using tree.find(value)
const tree = new BinarySearchTree(4);
tree.insert(48);
tree.insert(58);

console.log(tree);
