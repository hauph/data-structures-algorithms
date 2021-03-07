class Node {
    constructor(data, left, right) {
      this.data = data;
      this.count = 1;
      this.left = left;
      this.right = right;
      this.show = this.show;
    }
  
    show() {
      console.log(this.data);
      return this.data;
    }
  }
  
  class BST {
    constructor() {
      this.root = null;
      this.totalNodes = 0;
      this.totalEdges = this.totalEdges;
      this.insert = this.insert;
      this.inOrder = this.inOrder;
      this.preOrder = this.preOrder;
      this.postOrder = this.postOrder;
      this.getMin = this.getMin;
      this.getMax = this.getMax;
      this.find = this.find;
      this.remove = this.remove;
      this.getSmallest = this.getSmallest;
      this.removeNode = this.removeNode;
      this.update = this.update;
    }
  
    update(data) {
      var grade = this.find(data);
      if (grade !== null) {
        grade.count++;
        return grade;
      }
    }
  
    insert(data) {
      this.update(data);
      var n = new Node(data, null, null);
      if (this.root === null) {
        this.root = n;
        this.totalNodes++;
      } else {
        var current = this.root;
        var parent;
        while (true) {
          parent = current;
          if (data < current.data) {
            current = current.left;
            if (current === null) {
              parent.left = n;
              this.totalNodes++;
              break;
            }
          } else {
            current = current.right;
            if (current === null) {
              parent.right = n;
              this.totalNodes++;
              break;
            }
          }
        }
      }
    }
  
    inOrder(node) {
      if (node !== null) {
        this.inOrder(node.left);
        node.show();
        this.inOrder(node.right);
      }
    }
  
    preOrder(node) {
      if (node !== null) {
        node.show();
        this.preOrder(node.left);
        this.preOrder(node.right);
      }
    }
  
    postOrder(node) {
      if (node !== null) {
        this.postOrder(node.left);
        this.postOrder(node.right);
        node.show();
      }
    }
  
    // get min data
    getMin() {
      var current = this.root;
      while (current.left !== null) {
        current = current.left;
      }
      return current.data;
    }
  
    // get max data
    getMax() {
      var current = this.root;
      while (current.right !== null) {
        current = current.right;
      }
      return current.data;
    }
  
    find(data) {
      var current = this.root;
      while (current && current.data != data) {
        if (data < current.data) {
          current = current.left;
        } else {
          current = current.right;
        }
      }
      return current;
    }
  
    // get smallest node
    getSmallest(node) {
      if (node.left == null) {
        return node;
      } else {
        return this.getSmallest(node.left);
      }
    }
  
    remove(data) {
      this.root = this.removeNode(this.root, data);
    }
  
    removeNode(node, data) {
      if (node === null) {
        return null;
      }
      if (data == node.data) {
        // node has no children
        if (node.left === null && node.right === null) {
          this.totalNodes--;
          return null;
        }
        if (node.left === null) {
          this.totalNodes--;
          return node.right;
        }
        // node has no right child
        if (node.right === null) {
          this.totalNodes--;
          return node.left;
        }
        // node has two children
        var tempNode = this.getSmallest(node.right);
        node.data = tempNode.data;
        node.right = this.removeNode(node.right, tempNode.data);
        this.totalNodes--;
        return node;
      } else if (data < node.data) {
        node.left = this.removeNode(node.left, data);
        return node;
      } else {
        node.right = this.removeNode(node.right, data);
        return node;
      }
    }
    
    totalEdges() {
        return this.totalNodes - 1
    }
  }