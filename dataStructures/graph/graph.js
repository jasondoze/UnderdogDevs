// adjacency list graph implementation, undirected graph (2 way connection)

class Node {
  constructor(value) {
    this.value = value;
    this.edgesList = [];
  }
  // connect to nodes
  connect(node) {
    this.edgesList.push(node);
    node.edgesList.push(this);
  }
  // to get the adjacent nodes, return its edges list mapped to its value
  getAdjacentNodes() {
    return this.edgesList.map((edge) => edge.value);
  }
  isConnected(node) {
    return this.edgesList.map((edge) => edge.value).indexOf(node.value) > -1;
  }
}
class Graph {
  constructor(nodes) {
    this.nodes = [...nodes];
  }
  // add a node
  addToGraph() {
    this.nodes.push(node);
  }
}

const nodeA = new Node('A');
const nodeB = new Node('B');
const nodeC = new Node('C');
const nodeD = new Node('D');
const nodeE = new Node('E');

const graph = new Graph([nodeA, nodeB, nodeC, nodeD, nodeE]);
nodeA.connect(nodeB);
nodeA.connect(nodeD);
nodeB.connect(nodeC);
nodeC.connect(nodeD);
nodeC.connect(nodeE);
nodeD.connect(nodeE);

// console.log('nodeA', nodeA);
// console.log('graph', graph);

// for (let node of graph.nodes) {
//   console.log(`Node ${node.value}`);
//   for (let connectedNode of node.edgesList) {
//     console.log(`Node ${node.value} is connected to ${connectedNode.value}`);
//   }
// }

console.log(nodeA.getAdjacentNodes());
console.log(nodeA.isConnected(nodeB));
console.log(nodeA.isConnected(nodeC));
console.log(nodeD.isConnected(nodeC));

