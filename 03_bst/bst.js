'use strict';

function BinarySearchTree(value) {
    this.value = value;
    this.magnitude = 1;
}

BinarySearchTree.prototype.insert = function(value) {
    this.magnitude++;
    let direction = value < this.value ? 'left' : 'right';
    if (this[direction]) this[direction].insert(value)
    else this[direction] = new BinarySearchTree(value);
}

BinarySearchTree.prototype.contains = function(value) {
    if (this.value === value) return true;
    let direction = value < this.value ? 'left' : 'right';
    if (this[direction]) return this[direction].contains(value)
    else return false;
}

BinarySearchTree.prototype.depthFirstForEach = function(iterator, order) {
    if (order === 'pre-order') iterator(this.value);
    if (this.left) this.left.depthFirstForEach(iterator, order);
    if (!order || order === 'in-order') iterator(this.value);
    if (this.right) this.right.depthFirstForEach(iterator, order);
    if (order === 'post-order') iterator(this.value);
}

BinarySearchTree.prototype.breadthFirstForEach = function(iterator, queue) {
    queue = queue || [this];
    var tree;
    tree = queue.shift();
    if (!tree) return;
    iterator(tree.value);
    if (tree.left) queue.push(tree.left);
    if (tree.right) queue.push(tree.right);
    return tree.breadthFirstForEach(iterator, queue);
}

BinarySearchTree.prototype.size = function() {
    return this.magnitude;
}