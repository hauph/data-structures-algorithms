class Graph {
    constructor(v) {
      this.vertices = v;
      this.vertexList = [];
      this.edges = 0;
      this.adj = [];
      for (var i = 0; i < this.vertices; ++i) {
        this.adj[i] = [];
      }
      this.addEdge = this.addEdge;
      this.showGraph = this.showGraph;
      this.marked = [];
      for (var i = 0; i < this.vertices; ++i) {
        this.marked[i] = false;
      }
      this.dfs = this.dfs;
      this.bfs = this.bfs;
      this.edgeTo = [];
      this.pathTo = this.pathTo;
      this.hasPathTo = this.hasPathTo;
      this.showPath = this.showPath;
      this.topSortHelper = this.topSortHelper;
      this.topSort = this.topSort;
    }
  
    addEdge(v, w) {
      this.adj[v].push(w);
      this.adj[w].push(v);
      this.edges++;
    }
  
    showGraph() {
      for (var i = 0; i < this.vertices; ++i) {
        let responseStr = '';
        for (var j = 0; j < this.vertices; ++j) {
          if (this.adj[i][j] != undefined) {
            var w = this.adj[i][j];
            responseStr += this.vertexList[w] + ' ';
          }
        }
        console.log(i + ' -> ' + responseStr);
      }
    }
  
    dfs(v) {
      this.marked[v] = true;
      if (this.adj[v] !== undefined) {
        console.log('Visited vertex: ' + v);
      }
      for (var i = 0; i < this.adj[v].length; i++) {
        var w = this.adj[v][i];
        if (!this.marked[w]) {
          this.dfs(w);
        }
      }
    }
  
    bfs(s) {
      var queue = [];
      this.marked[s] = true;
      queue.push(s); // add to back of queue
      while (queue.length > 0) {
        var v = queue.shift(); // remove from front of queue
        if (v !== undefined) {
          console.log('Visited vertex: ' + v);
        }
        for (var i = 0; i < this.adj[v].length; i++) {
          var w = this.adj[v][i];
          if (!this.marked[w]) {
            this.edgeTo[w] = v;
            this.marked[w] = true;
            queue.push(w);
          }
        }
      }
    }
  
    pathTo(source, v) {
      if (!this.hasPathTo(v)) {
        return undefined;
      }
      var path = [];
      for (var i = v; i != source; i = this.edgeTo[i]) {
        path.push(i);
      }
      path.push(source);
      return path;
    }
  
    hasPathTo(v) {
      return this.marked[v];
    }
  
    showPath(paths) {
      let pathStr = '';
      while (paths.length > 0) {
        if (paths.length > 1) {
          let output = `${paths.pop()} - `;
          pathStr += output;
        } else {
          pathStr = `${pathStr}${paths.pop()}`;
        }
      }
      console.log(pathStr);
    }
  
    topSort() {
      var stack = [];
      var visited = [];
      for (var i = 0; i < this.vertices; i++) {
        visited[i] = false;
      }
      for (var i = 0; i < this.vertices; i++) {
        if (!visited[i]) {
          this.topSortHelper(i, visited, stack);
        }
      }
      for (var i = 0; i < stack.length; i++) {
        if (stack[i] !== undefined && stack[i] !== false) {
          console.log(this.vertexList[stack[i]]);
        }
      }
    }
  
    topSortHelper(v, visited, stack) {
      visited[v] = true;
      for (var i = 0; i < this.adj[v]; i++) {
        var w = this.adj[v][i];
        if (!visited[w]) {
          this.topSortHelper(visited[w], visited, stack);
        }
      }
      stack.push(v);
    }
  }