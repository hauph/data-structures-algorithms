class Dictionary {
  constructor() {
    this.datastore = {};
    this.add = add;
    this.find = find;
    this.remove = remove;
    this.showAll = showAll;
  }

  add(key, value) {
    this.datastore[key] = value;
  }

  find(key) {
    return this.datastore[key];
  }

  remove(key) {
    delete this.datastore[key];
  }

  showAll() {
    for (let key in this.datastore) {
      console.log(key + " -> " + this.datastore[key]);
    }
  }
}
