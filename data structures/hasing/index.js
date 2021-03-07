class HashTable {
    constructor() {
        this.table = new Array(137);
        this.betterHash = this.betterHash;
        this.showDistro = this.showDistro;
        this.put = this.put;
    }

    put(word, number) {
      var pos = this.betterHash(word);
      this.table[pos] = number;
    }

    showDistro() {
      var n = 0;
      for (var i = 0; i < this.table.length; ++i) {
        if (this.table[i] !== undefined) {
          console.log(i + ": " + this.table[i]);
        }
      }
    }

    betterHash(string) {
      var H = 31;
      var total = 0;
      for (var i = 0; i < string.length; ++i) {
        total += H * total + string.charCodeAt(i);
      }
      total = total % this.table.length;
      if (total < 0) {
        total += this.table.length - 1;
      }
      return parseInt(total);
    }
}