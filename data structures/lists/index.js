class List {
  constructor() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = [];
    this.clear = this.clear;
    this.find = this.find;
    this.toString = this.toString;
    this.insert = this.insert;
    this.append = this.append;
    this.remove = this.remove;
    this.front = this.front;
    this.end = this.end;
    this.previous = this.previous;
    this.next = this.next;
    this.hasPrevious = this.hasPrevious;
    this.hasNext = this.hasNext;
    this.length = this.length;
    this.currPos = this.currPos;
    this.moveTo = this.moveTo;
    this.getElement = this.getElement;
    this.contains = this.contains;
  }

  append(element) {
    this.dataStore[this.listSize++] = element;
  }

  find(element) {
    return this.dataStore.indexOf(element);
    /* for (var i = 0; i < this.dataStore.length; ++i) {
           if (this.dataStore[i] == element) {
              return i;
           }
        }
        return -1; */
  }

  remove(element) {
    var foundAt = this.find(element);
    if (foundAt > -1) {
      this.dataStore.splice(foundAt, 1);
      --this.listSize;
      return true;
    }
    return false;
  }

  length() {
    return this.listSize;
  }

  toString() {
    return this.dataStore;
  }

  insert(element, after) {
    var insertPos = this.find(after);
    if (insertPos > -1) {
      this.dataStore.splice(insertPos + 1, 0, element);
      ++this.listSize;
      return true;
    }
    return false;
  }

  clear() {
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = this.pos = 0;
  }

  contains(element) {
    for (var i = 0; i < this.dataStore.length; ++i) {
      if (this.dataStore[i] == element) {
        return true;
      }
    }
    return false;
  }

  moveTo(position) {
    this.pos = position;
  }

  getElement() {
    return this.dataStore[this.pos];
  }

  previous() {
    return this.dataStore[--this.pos];
  }

  next() {
    return this.dataStore[this.pos++];
  }

  hasNext() {
    if (this.pos > this.listSize - 1) {
      return false;
    } else {
      return true;
    }
  }

  hasPrevious() {
    if (this.pos <= 0) {
      return false;
    } else {
      return true;
    }
  }

  front() {
    this.pos = 0;
  }

  end() {
    this.pos = this.listSize - 1;
  }

  currPos() {
    return pos;
  }
}
