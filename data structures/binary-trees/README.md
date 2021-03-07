## Definition:

- Can be searched very quickly (as opposed to a linked list, for example); also data from a binary tree can be quickly inserted and deleted (as opposed to an array).
- Tree:
  - A tree is a nonlinear data structure that is used to store data in a hierarchical manner.
  - A tree is made up of a set of **nodes** connected by **edges**.
  - A tree can be broken down into **levels**.
- Node:
  - The top node of a tree is called the **root** node.
  - If a node is connected to other nodes below it, the preceding node is called the **parent** node, and the nodes following it are called **child** nodes.
  - A node can have zero, one, or more child nodes connected to it. A node without any child nodes is called a leaf node.
  - A node at any level is considered the root of a **subtree**, which consists of that root node’s children, its children’s children, and so on.
  - Each node in a tree has a value associated with it. This value is sometimes referred to as the **key** value.
  - The series of edges to follow to get from one node to another node is called a **path**. Visiting all the nodes in a tree in some particular order is known as a **tree traversal**.
- Binary tree:
  - Binary trees restricts the number of child nodes to no more than two. This helps write efficient programs for inserting data, searching for data, and deleting data in a tree.
  - **Left** node stores data with lesser values.
  - **Right** node stores data with greater values.

## [Sample Code](../binary-trees/index.js)