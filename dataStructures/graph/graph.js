// adjacency list graph implementation, undirected graph (2 way connection)

class Node {
  constructor(value) {
    this.value = value;
    this.edgesList = [];
  }
  // connect to nodes
  connect(node) {
    this.edgesList.push(node);
    node.edgesList.push(this)
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
nodeA.connect(nodeD)
nodeB.connect(nodeC)
nodeC.connect(nodeE)
console.log('nodeA', nodeA);
console.log('graph', graph);
