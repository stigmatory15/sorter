class Sorter {
  constructor(array1) {
      this.array1 = [];
      this.compareFunction = function (a,b){
          return a - b;
      }
  }

  add(element) {
    this.array1.push(element);
  }

  at(index) {
    return this.array1[index];
  }

  get length() {
      return this.array1.length;
  }

  toArray() {
      return this.array1;
  }

  sort(indices) {
      var array2 = [];
      for(var i = 0; i < indices.length; i++)
          array2[i] = this.array1[indices[i]];
      indices.sort(function(a, b){
          return a - b;
      });
      array2.sort(this.compareFunction);
      for(var j = 0; j < indices.length; j++)
          this.array1[indices[j]] = array2[j];
  }

  setComparator(compareFunction) {
      this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;