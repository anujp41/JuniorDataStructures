'use strict';

function Queue() {
    this.data = [];
    this.head = this.tail = 0;
}

Queue.prototype.enqueue = function(element) {
    this.data.push(element);
    this.tail++;
};

Queue.prototype.dequeue = function() {
    if (this.tail < this.head) return undefined;
    var currHead = this.head;
    this.head++;
    return this.data[currHead];
}

Queue.prototype.size = function() {
    if (this.tail < this.head) return 0;
    return this.tail - this.head;
}