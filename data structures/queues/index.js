class Queue {
  constructor() {
    this.readOnlyData = [];
    this.dataStore = [];
    this.enqueue = this.enqueue;
    this.dequeue = this.dequeue;
    this.front = this.front;
    this.back = this.back;
    this.toString = this.toString;
    this.empty = this.empty;
    this.count = this.count;
  }

  enqueue(element) {
    this.readOnlyData.push(element);
    this.dataStore.push(element);
  }

  dequeue() {
    return this.dataStore.shift();
  }

  front() {
    return this.dataStore[0];
  }

  back() {
    return this.dataStore[this.dataStore.length - 1];
  }

  toString() {
    var retStr = "";
    for (var i = 0; i < this.dataStore.length; ++i) {
      retStr += this.dataStore[i] + "\n";
    }
    return retStr;
  }

  empty() {
    if (this.dataStore.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  count() {
    return this.dataStore.length;
  }
}
