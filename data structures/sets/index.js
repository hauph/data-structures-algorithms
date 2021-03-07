class Set {
    constructor() {
      this.dataStore = [];
      this.add = this.add;
      this.remove = this.remove;
      this.size = this.size;
      this.union = this.union;
      this.intersect = this.intersect;
      this.subset = this.subset;
      this.difference = this.difference;
      this.show = this.show;
      this.contains = this.contains;
      this.createNewDataStore = this.createNewDataStore;
      this.higher = this.higher;
      this.lower = this.lower;
    }
  
    add(data) {
      if (this.dataStore.indexOf(data) < 0) {
        this.dataStore.push(data);
        this.dataStore.sort();
        return true;
      } else {
        return false;
      }
    }
  
    remove(data) {
      var pos = this.dataStore.indexOf(data);
      if (pos > -1) {
        this.dataStore.splice(pos, 1);
        return true;
      } else {
        return false;
      }
    }
  
    show() {
      console.log(this.dataStore);
    }
  
    contains(data) {
      if (this.dataStore.indexOf(data) > -1) {
        return true;
      } else {
        return false;
      }
    }
  
    union(set) {
      var tempSet = new Set();
      for (var i = 0; i < this.dataStore.length; ++i) {
        tempSet.add(this.dataStore[i]);
      }
      for (var i = 0; i < set.dataStore.length; ++i) {
        if (!tempSet.contains(set.dataStore[i])) {
          tempSet.dataStore.push(set.dataStore[i]);
        }
      }
      return tempSet;
    }
  
    intersect(set) {
      var tempSet = new Set();
      for (var i = 0; i < this.dataStore.length; ++i) {
        if (set.contains(this.dataStore[i])) {
          tempSet.add(this.dataStore[i]);
        }
      }
      return tempSet;
    }
  
    subset(set) {
      if (this.size() > set.size()) {
        return false;
      } else {
        for (let i = 0; i < this.dataStore.length; i++) {
          if (!set.contains(this.dataStore[i])) {
            return false;
          }
        }
      }
      return true;
    }
  
    size() {
      return this.dataStore.length;
    }
  
    difference(set) {
      var tempSet = new Set();
      for (var i = 0; i < this.dataStore.length; ++i) {
        if (!set.contains(this.dataStore[i])) {
          tempSet.add(this.dataStore[i]);
        }
      }
      return tempSet;
    }
    
    higher(data) {
        let newDataStore = this.createNewDataStore(this.dataStore);
      console.log(newDataStore)
      let index = newDataStore.indexOf(data);
      if (index > -1) {
          console.log(newDataStore[index + 1])
      } else {
          console.log(`Cannot find ${data}`)
      }
    }
    
    lower(data) {
        let newDataStore = this.createNewDataStore(this.dataStore);
      console.log(newDataStore)
      let index = newDataStore.indexOf(data);
      if (index > -1) {
          console.log(newDataStore[index - 1])
      } else {
          console.log(`Cannot find ${data}`)
      }
    }
    
    createNewDataStore (dataStore) {  	
      const numberDataStore = [];
      const stringDataStore = [];
      
      for (let i = 0; i < dataStore.length; i++) {
          const data = dataStore[i]
        if (typeof data === 'number') {
            numberDataStore.push(data);
          numberDataStore.sort((a,b) => {return a - b});
        }	else if (typeof data === 'string') {
            stringDataStore.push(data);
          stringDataStore.sort();
        }
      }
      
      let newDataStore = numberDataStore.concat(stringDataStore);
      return newDataStore
    }
  }