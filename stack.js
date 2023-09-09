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

/* Stack using Object */

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

/* Stack using LinkedList */

const LinkedList = require("./linkedList");

class StackUsingLinkedList {
  constructor() {
    this.list = new LinkedList();
  }
  getSize() {
    return this.list.getSize();
  }
  isEmpty() {
    return this.list.isEmpty();
  }
  pop() {
    this.list.removeFrom(this.list.getSize());
  }
  push(value) {
    this.list.append(value);
  }
  peak() {
    let curr = this.list.head;
    while (curr && curr.next) {
      curr = curr.next;
    }
    return curr.value;
  }
  print() {
    this.list.print();
  }
}

// const stack = new StackUsingArray();
// const stack = new StackUsingObject();
const stack = new StackUsingLinkedList();
console.log("is stack empty : ", stack.isEmpty());
stack.push(5);
stack.push(9);
stack.push(8);
stack.pop();
console.log("length of stack : ", stack.getSize());
console.log("peek of stack is : ", stack.peak());
stack.print();
