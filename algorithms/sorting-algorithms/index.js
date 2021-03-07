class CArray {
  constructor(numElements) {
    this.dataStore = [];
    for (var i = 0; i < numElements; ++i) {
      this.dataStore[i] = i;
    }
    this.pos = 0;
    this.numElements = numElements;
    this.insert = this.insert;
    this.toString = this.toString;
    this.clear = this.clear;
    this.setData = this.setData;
    this.swap = this.swap;
    this.bubbleSort = this.bubbleSort;
    this.selectionSort = this.selectionSort;
    this.insertionSort = this.insertionSort;
    this.shellsort = this.shellsort;
    this.shellsort2 = this.shellsort2;
    this.gaps = [5, 3, 1]; // this gap is just to test shellsort and only works with array of 10
    this.clear = this.clear;
    this.merge = this.merge;
    this.mergeSort = this.mergeSort;
    this.qSort = this.qSort;
  }

  setData() {
    for (var i = 0; i < this.numElements; ++i) {
      this.dataStore[i] = Math.floor(Math.random() * (this.numElements + 1));
    }
  }

  clear() {
    for (var i = 0; i < this.dataStore.length; ++i) {
      this.dataStore[i] = 0;
    }
  }

  insert(element) {
    this.dataStore[this.pos++] = element;
  }

  toString() {
    var retstr = "";
    for (var i = 0; i < this.dataStore.length; ++i) {
      if (i === this.dataStore.length - 1) {
        retstr += this.dataStore[i];
      } else {
        retstr += this.dataStore[i] + " ";
      }
      if (i > 0 && i % 10 == 0) {
        retstr += "\n";
      }
    }
    return retstr;
  }

  swap(arr, index1, index2) {
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
  }

  bubbleSort() {
    var numElements = this.dataStore.length;
    var temp;
    for (var outer = numElements; outer >= 2; --outer) {
      for (var inner = 0; inner <= outer - 1; ++inner) {
        if (this.dataStore[inner] > this.dataStore[inner + 1]) {
          this.swap(this.dataStore, inner, inner + 1);
        }
      }
    }
    console.log("bubble sort", this.toString());
  }

  selectionSort() {
    var min, temp;
    for (var outer = 0; outer <= this.dataStore.length - 2; ++outer) {
      min = outer;
      for (var inner = outer + 1; inner <= this.dataStore.length - 1; ++inner) {
        if (this.dataStore[inner] < this.dataStore[min]) {
          min = inner;
        }
      }
      this.swap(this.dataStore, outer, min);
    }
    console.log("selection sort", this.toString());
  }

  insertionSort() {
    var temp, inner;
    for (var outer = 1; outer <= this.dataStore.length - 1; ++outer) {
      temp = this.dataStore[outer];
      inner = outer;
      while (inner > 0 && this.dataStore[inner - 1] >= temp) {
        this.dataStore[inner] = this.dataStore[inner - 1];
        --inner;
      }
      this.dataStore[inner] = temp;
    }
    console.log("insertion sort", this.toString());
  }

  shellsort() {
    for (var g = 0; g < this.gaps.length; ++g) {
      for (var i = this.gaps[g]; i < this.dataStore.length; ++i) {
        var temp = this.dataStore[i];
        for (
          var j = i;
          j >= this.gaps[g] && this.dataStore[j - this.gaps[g]] > temp;
          j -= this.gaps[g]
        ) {
          this.dataStore[j] = this.dataStore[j - this.gaps[g]];
        }
        this.dataStore[j] = temp;
      }
    }
    console.log("shell sort", this.toString());
  }
  /**
   * Robert Sedgewick's Shellsort algorithms
   * uses a formula to dynamically compute the gap sequence to use with Shellsort.
   *
   * @memberof CArray
   */
  shellsort2() {
    var N = this.dataStore.length;
    var h = 1;
    while (h < N / 3) {
      h = 3 * h + 1;
    }
    while (h >= 1) {
      for (var i = h; i < N; i++) {
        for (
          var j = i;
          j >= h && this.dataStore[j] < this.dataStore[j - h];
          j -= h
        ) {
          this.swap(this.dataStore, j, j - h);
        }
      }
      h = (h - 1) / 3;
    }
    console.log("shell sort 2", this.toString());
  }

  clearAll() {
    this.dataStore.length = 0;
  }

  merge(left, right) {
    var result = [];
    var leftLen = left.length;
    var rightLen = right.length;
    while (leftLen > 0 || rightLen > 0) {
      if (leftLen > 0 && rightLen > 0) {
        // Both left and right are still populated
        if (left[0] < right[0]) {
          result.push(left.shift());
          leftLen -= 1;
        } else if (right[0] <= left[0]) {
          result.push(right.shift());
          rightLen -= 1;
        }
      }
      // Only left array contains elements
      else if (leftLen > 0) {
        result.push(left.shift());
        leftLen -= 1;
      }
      // Only right array contains elements
      else if (rightLen > 0) {
        result.push(right.shift());
        rightLen -= 1;
      }
    }
    return result;
  }

  mergeSort(array) {
    var length = array.length;
    if (length <= 1) {
      return array;
    }
    var q = Math.floor(length / 2);
    var left = this.mergeSort(array.slice(0, q));
    var right = this.mergeSort(array.slice(q));
    return this.merge(left, right);
  }

  qSort(arr) {
    if (arr.length == 0) {
      return [];
    }
    var left = [];
    var right = [];
    var pivot = arr[0];
    for (var i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    return this.qSort(left).concat(pivot, this.qSort(right));
  }
}
