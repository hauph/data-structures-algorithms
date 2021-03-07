function seqSearch(arr, data) {
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] == data) {
      return i;
    }
  }
  return -1;
}

function seqSearchRev(arr, data) {
  for (var i = arr.length - 1; i >= 0; --i) {
    if (arr[i] == data) {
      return i;
    }
  }
  return -1;
}

class binSearch {
  constructor() {
    super();
    this.search = this.search;
    this.insertionSort = this.insertionSort;
  }

  insertionSort(arr) {
    var temp, inner;
    for (var outer = 1; outer <= arr.length - 1; ++outer) {
      temp = arr[outer];
      inner = outer;
      while (inner > 0 && arr[inner - 1] >= temp) {
        arr[inner] = arr[inner - 1];
        --inner;
      }
      arr[inner] = temp;
    }
    return arr;
  }

  search(arr, data) {
    const sortedArr = this.insertionSort(arr);
    var upperBound = sortedArr.length - 1;
    var lowerBound = 0;
    while (lowerBound <= upperBound) {
      var mid = Math.floor((upperBound + lowerBound) / 2);
      if (sortedArr[mid] < data) {
        lowerBound = mid + 1;
      } else if (sortedArr[mid] > data) {
        upperBound = mid - 1;
      } else {
        return mid;
      }
    }
    return -1;
  }
}
