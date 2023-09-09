        /* Single Linkedlist */

// Find isEmpty
// Get size
// prepend
// append
// insert at given position    
// remove from given position
// remove value
// search
// print

// Find Mid 
// Reverse 
// Find Cycle 
// Remove Cycle
// Sum of last n nodes 
// Sort a linked list O(n)
// find the length of the longest palindrome list

// How will you modify a linked list of integers so that all even numbers appear before all odd numbers in the modified linked list? Also, keep the even and odd numbers in the same order.
// Example:
// Input: 17->15->8->12->10->5->4->1->7->6->NULL
// Output: 8->12->10->4->6->17->15->5->1->7->NULL





class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    prepend(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.head = newNode
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size++;
    }

    append(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.head = newNode
        } else {
            let curr = this.head;
            while (curr.next) {
                curr = curr.next;
            }
            curr.next = newNode;
        }
        this.size++;
    }

    insert(value,pos){
        if(pos > this.size || pos <= 0)
            return;
        if(pos === 1){
            this.prepend(value)
        }
        else{
            const newNode = new Node(value);
            let curr = this.head;
            for(let i = 1; i<pos; i++){
                curr = curr.next;
            }
            newNode.next = curr.next;
            curr.next = newNode;
            this.size++;
        }
    }

    removeFrom(pos){
        if(pos <= 0 || pos > this.getSize())
            return;

        if(pos === 1){
            this.head = this.head.next;
        }else{
            let curr = this.head;
            for(let i = 1; i<pos-1;i++){
                curr = curr.next;
            }
            curr.next = curr.next.next;
        }
        this.size--;
    }

    removeValue(value){
        if(this.isEmpty())
            return;
        if(this.head.value == value){
            this.head = this.head.next;
        }else{
        let curr = this.head;
        let next;
        while(curr.next){
            next = curr.next;
            if(next?.value && next?.value == value){
                break;
            }
            curr = curr.next
        }
        if(next){
            curr.next = next.next;
        }
    }
        this.size--;
    }

    search(value){
        let curr = this.head;
        while(curr){
            if(curr.value == value){
                return true;
            }
            curr = curr.next;
        }
        return false
    }

    findMid(){
        if(this.isEmpty())
            return;
        let slow = this.head;
        let fast = this.head;
        while(fast && fast.next){
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow?.value;
    }

    print() {
        let value = "";
        let curr = this.head;
        while (curr) {
            value = value + " -> " + curr.value;
            curr = curr.next;
        }
        console.log(value)
    }
}

module.exports = LinkedList;

// const linkedList = new LinkedList()
// linkedList.prepend(6)
// linkedList.prepend(3)
// linkedList.append(4)
// linkedList.append(5)
// linkedList.insert(9,3)
// linkedList.insert(12,1)
// linkedList.insert(16,6)
// linkedList.removeFrom(1)
// linkedList.removeFrom(linkedList.getSize())
// linkedList.removeFrom(3)
// linkedList.removeValue(3)
// linkedList.print()
// console.log(linkedList.findMid())
// console.log(linkedList.search(3))