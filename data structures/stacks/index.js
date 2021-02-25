class Stack {
  constructor() {
    this.dataStore = [];
    this.top = 0;
    this.push = this.push;
    this.pop = this.pop;
    this.peek = this.peek;
    this.clear = this.clear;
    this.length = this.length;
  }

  push(element) {
    this.dataStore[this.top++] = element;
  }

  peek() {
    return this.dataStore[this.top - 1];
  }

  pop() {
    return this.dataStore[--this.top];
  }

  clear() {
    this.top = 0;
    this.dataStore.length = 0;
  }

  length() {
    return this.top;
  }
}
