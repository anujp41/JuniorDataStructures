function Node(value, previous, next) {
    this.value = value;
    this.previous = previous || null;
    this.next = next || null;
}

function LinkedList() {
    this.head = null;
    this.tail = null;
}

LinkedList.prototype.addToHead = function(value) {
    let newNode = new Node(value, null, this.head);
    this.head ? this.head.previous = newNode : this.tail = newNode;
    this.head = newNode;
}

LinkedList.prototype.addToTail = function(value) {
    let newNode = new Node(value, this.tail);
    this.tail ? this.tail.next = newNode : this.head = newNode;
    this.tail = newNode;
}

LinkedList.prototype.removeHead = function() {
    if (!this.head) return null;
    let temp = this.head;
    this.head = this.head.next;
    if (this.head) this.head.previous = null;
    else this.tail = null;
    return temp.value;
}

LinkedList.prototype.removeTail = function() {
    if (!this.tail) return null;
    let temp = this.tail;
    this.tail = this.tail.previous;
    if (this.tail) this.tail.next = null;
    else this.head = null;
    return temp.value;
}

// LinkedList.prototype.search = function(value) {
//     let currNode = this.head;
//     while (currNode) {
//         if (this.head.value === value) {
//             return value;
//         }
//         currNode = this.head.next;
//     }
//     return null;
// }

LinkedList.prototype.search = function(predicate) {
    // var correct = isFn(predicate) ? predicate : function(value){
    //   return value == predicate;
    // };
    var currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === predicate) return currentNode.value;
      currentNode = currentNode.next;
    }
    return null;
  };