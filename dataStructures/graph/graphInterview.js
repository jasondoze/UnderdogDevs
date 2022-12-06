// given a graph of users and their connections, find the smallest distance between two users- breadth first traversal

// breadth first traversal, finding the shortest path
class Node {
  constructor(value) {
    this.value = value;
    this.edgesList = [];
  }
  connect(node) {
    this.edgesList.push(node);
    node.edgesList.push(this);
  }
  getAdjacentNodes() {
    return this.edgesList;
  }
  isConnected(node) {
    return !!this.edgesList.find((edge) => edge.value === node.value);
  }
}
class Graph {
  constructor(nodes) {
    this.nodes = [...nodes];
  }
  addToGraph(node) {
    this.nodes.push(node);
  }
  reconstructPath(visitedNodes, startNode, endNode) {
    let currNode = endNode;
    // track the traversed nodes
    const shortestPath = [];

    while (currNode !== null) {
      shortestPath.push(currNode);
      currNode = visitedNodes[currNode.value];
    }
    return shortestPath.reverse();
    // console.log(shortestPath);
  }

  breadthFirstTraversal(start, end) {
    const queue = [start];
    // creat a visited nodes object
    const visitedNodes = {};
    visitedNodes[start.value] = null;

    // loop until theres nothing left in the queue
    while (queue.length > 0) {
      // pull node queue to visit
      // add its neighbors to the queue
      const node = queue.shift();
      // check if current node is the end node
      if (node.value === end.value) {
        console.log('Found It!');
        return this.reconstructPath(visitedNodes, start, end);
      }
      // loop over its neighbors
      for (const neighbor of node.edgesList) {
        // if visited nodes array doesnt have the adjancency in it
        if (!visitedNodes.hasOwnProperty(neighbor.value)) {
          // tracks the parent node of the current node
          visitedNodes[neighbor.value] = node;
          queue.push(neighbor);
          // add the neighbor to the visited nodes
          // visitedNodes.add(neighbor);
        }
      }
      console.log(visitedNodes);
    }
  }
}

const Hannah = new Node('Hannah');
const Mary = new Node('Mary');
const Mel = new Node('Mel');
const Max = new Node('Max');
const Dan = new Node('Dan');
const Nis = new Node('Nis');
const Chris = new Node('Chris');
const Nicolette = new Node('Nicolette');
const Yair = new Node('Yair');
const Mabel = new Node('Mabel');
const Liz = new Node('Liz');

const graph = new Graph([
  Hannah,
  Mary,
  Mel,
  Max,
  Dan,
  Nis,
  Chris,
  Nicolette,
  Yair,
  Mabel,
  Liz,
]);

Hannah.connect(Max);
Hannah.connect(Mel);
Hannah.connect(Mary);
Hannah.connect(Nis);
Hannah.connect(Liz);
Mel.connect(Max);
Nis.connect(Dan);
Nis.connect(Chris);
Nis.connect(Yair);
Chris.connect(Nicolette);
Chris.connect(Yair);
Yair.connect(Liz);
Yair.connect(Mabel);
Yair.connect(Liz);
Mabel.connect(Liz);

console.log(graph.breadthFirstTraversal(Hannah, Mabel));
