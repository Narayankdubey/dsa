/* Stack using Array */

class Stack {
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

const stack = new Stack();
console.log("is stack empty : ", stack.isEmpty());
stack.push(5);
stack.push(9);
stack.push(8);
stack.pop();
console.log("length of stack : ", stack.getSize());
console.log("peek of stack is : ", stack.peak());
stack.print();
