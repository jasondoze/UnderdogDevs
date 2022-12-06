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

  breadthFirstTraversal(start, end) {
    const queue = [start];
    // keep track of visited nodes
    const visitedNodes = new Set();
    visitedNodes.add(start);
    // loop until theres nothing left in the queue
    while (queue.length > 0) {
      // pull node queue to visit
      // add its adjacencies to the queue
      const node = queue.shift();
      // check if current node is the end node
      if(node.value === end.value) {
        console.log('Found It!')
      }
      // loop over its adjacencies
      for (const adjacency of node.edgesList) {
        // if visited nodes array doesnt have the adjancency in it
        if (!visitedNodes.has(adjacency)) {
          queue.push(adjacency);
          // add the adjacency to the visited nodes
          visitedNodes.add(adjacency);
        }
      }
      console.log(node.value);
    }
  }
}

const DFW = new Node('DFW');
const JFK = new Node('JFK');
const LAX = new Node('LAX');
const HNL = new Node('HNL');
const SAN = new Node('SAN');
const EWR = new Node('EWR');
const BOS = new Node('BOS');
const MIA = new Node('MIA');
const MCO = new Node('MCO');
const PBI = new Node('PBI');

const graph = new Graph([DFW, JFK, LAX, HNL, SAN, EWR, BOS, MIA, MCO, PBI]);

DFW.connect(LAX);
DFW.connect(JFK);
LAX.connect(HNL);
LAX.connect(EWR);
LAX.connect(SAN);
JFK.connect(BOS);
JFK.connect(MIA);
MIA.connect(MCO);
MCO.connect(PBI);
MIA.connect(PBI);

graph.breadthFirstTraversal(DFW, MIA);
