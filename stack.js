/* Stack using Array */

class StackUsingArray {
  constructor() {
    this.list = [];
  }
  getSize() {
    return this.list.length;
  }
  isEmpty() {
    return this.list.length === 0;
  }
  pop() {
    this.list.pop();
  }
  push(value) {
    this.list.push(value);
  }
  peak() {
    return this.list[this.getSize() - 1];
  }
  print() {
    console.log(this.list.toString());
  }
}

class StackUsingObject {
  constructor() {
    this.list = {};
    this.head = 0;
  }
  getSize() {
    return this.head;
  }
  isEmpty() {
    return this.head === 0;
  }
  pop() {
    delete this.list[this.head];
    this.head--;
  }
  push(value) {
    this.list[this.head + 1] = value;
    this.head++;
  }
  peak() {
    return this.list[this.head];
  }
  print() {
    console.log(this.list);
  }
}

// const stack = new StackUsingArray();
const stack = new StackUsingObject();
console.log("is stack empty : ", stack.isEmpty());
stack.push(5);
stack.push(9);
stack.push(8);
stack.pop();
console.log("length of stack : ", stack.getSize());
console.log("peek of stack is : ", stack.peak());
stack.print();
