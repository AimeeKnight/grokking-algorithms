class Stack {
  constructor(height, width) {
    this._size = 0;
    this._storage = {};
  }

  push(data) {
    var size = ++this._size;
    this._storage[size] = data;
  }

  pop() {
    var size = this._size;
    var deletedData;

    if (size) {
      deletedData = this._storage[size];
      delete this._storage[size];
      this._size--;

      return deletedData;
    }
  }

}
