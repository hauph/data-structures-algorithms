## Definition:

- A graph consists of a set of **vertices** and a set of **edges**.
- A graph whose pairs are ordered is called a **directed graph**, or just a **digraph**.
- A graph is not ordered, it is called an unordered graph, or just a graph.
- A **path** is a sequence of vertices in a graph such that all vertices in the path are connected by edges. The length of a path is the number of edges from the first vertex in the path to the last vertex. A path can also consist of a vertex to itself, which is called a loop. Loops have a length of 0.
- A **cycle** is a path with at least one edge whose first and last vertices are the same. A **simple cycle** is one with no repeated edges or vertices for both directed and undirected graphs. Paths that repeat other vertices besides the first and last vertices are called **general cycles**.
- Two vertices are considered *strongly* connected if there is a path from the first vertex to the second vertex, and vice versa. If the graph is a directed graph, and all its vertices are strongly connected, then the directed graph is considered strongly connected.

## [Sample Code](../graphs/index.js) (with topological sorting)