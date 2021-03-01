class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LList {
  constructor() {
    this.head = new Node("head");
    this.find = this.find;
    this.insert = this.insert;
    this.findPrevious = this.findPrevious;
    this.remove = this.remove;
    this.advance = this.advance;
    this.back = this.back;
    this.findItemN = this.findItemN;
    this.findPrevItemN = this.findPrevItemN;
    this.show = this.show;
  }

  find(item) {
    var currNode = this.head;
    while (currNode.element != item) {
      currNode = currNode.next;
    }
    return currNode;
  }

  insert(newElement, item) {
    if (newElement != this.head.element) {
      var newNode = new Node(newElement);
      var current = this.find(item);
      newNode.next = current.next;
      current.next = newNode;
    }
  }

  display() {
    var currNode = this.head;
    while (!(currNode.next === null)) {
      console.log(currNode.next.element);
      currNode = currNode.next;
    }
  }

  findPrevious(item) {
    var currNode = this.head;
    while (!(currNode.next === null) && currNode.next.element != item) {
      currNode = currNode.next;
    }
    return currNode;
  }

  remove(item) {
    var prevNode = this.findPrevious(item);
    if (!(prevNode.next == null)) {
      prevNode.next = prevNode.next.next;
    }
  }

  findItemN(item, n) {
    let currentNode = this.find(item);
    let i = 0;

    while (i < n) {
      if (!(currentNode.next == null)) {
        currentNode = currentNode.next;
      }

      i++;
    }

    return currentNode;
  }

  findPrevItemN(item, n) {
    let currentNode = this.find(item);
    let i = 0;

    while (i < n) {
      currentNode = this.findPrevious(currentNode.element);

      if (currentNode.next == null) {
        currentNode = this.head.next;
      }

      i++;
    }

    return currentNode;
  }

  advance(item, n) {
    if (n > 0) {
      var currentNode = this.find(item);
      if (!(currentNode.next == null)) {
        let itemN = this.findItemN(item, n);
        var prevNode = this.findPrevious(item);
        prevNode.next = currentNode.next;
        currentNode.next = itemN.next;
        itemN.next = currentNode;
      }
    }
  }

  back(item, n) {
    if (n > 0) {
      var currentNode = this.find(item);
      var prevNodeOfCurrNode = this.findPrevious(item);

      if (!(prevNodeOfCurrNode.next == null)) {
        let itemN = this.findPrevItemN(item, n);
        if (itemN.element == this.head.element) {
          itemN = itemN.next;
        }
        var prevNodeOfItemN = this.findPrevious(itemN.element);
        prevNodeOfCurrNode.next = currentNode.next;
        currentNode.next = itemN;
        prevNodeOfItemN.next = currentNode;
      }
    }
  }

  show(item) {
    let currNode = this.find(item);
    console.log("Next element ------");
    console.log(currNode.next);
  }
}

/**
 * A circularly linked list is similar to a singly linked list and has the same type of nodes. 
 * The only difference is that a circularly linked list, when created, has its head node’s next property point back to itself: 
 * this.head.next = this.head
 * 
 * @class CircularlyLList
 */
class CircularlyLList {
  constructor() {
    this.head = new Node("head");
    this.head.next = this.head;
    this.find = this.find;
    this.insert = this.insert;
    this.findPrevious = this.findPrevious;
    this.remove = this.remove;
    this.findItemN = this.findItemN;
  }

  find(item) {
    var currNode = this.head;
    while (currNode.element != item) {
      currNode = currNode.next;
    }
    return currNode;
  }

  insert(newElement, item) {
    var newNode = new Node(newElement);
    var current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
  }

  display() {
    var currNode = this.head;
    while (!(currNode.next === null) && !(currNode.next.element == "head")) {
      console.log(currNode.next.element);
      currNode = currNode.next;
    }
  }

  findPrevious(item) {
    var currNode = this.head;
    while (!(currNode.next === null) && currNode.next.element != item) {
      currNode = currNode.next;
    }
    return currNode;
  }

  remove(item) {
    var prevNode = this.findPrevious(item);
    if (!(prevNode.next == null)) {
      prevNode.next = prevNode.next.next;
    }
  }

  findItemN(item, n) {
    let currentNode = this.find(item);
    let i = 0;

    while (i < n) {
      if (!(currentNode.next == null)) {
        currentNode = currentNode.next;
      }

      i++;
    }

    return currentNode;
  }
}
