/*

STACK

Abstract data type
LIFO - Last in, first out
Collection of elements with push and pop operations.
Note that there is a natural order. Elements are removed in the reverse order of their addition.

DO NOT use an array and the native push/pop method in your implementation. That's too easy, yeah? =P
Use an object as the underlying data structure.

*** Operations:

myStack.push(value)
=> count of stack
add value to collection

myStack.pop()
=> most recent element added collection
Remove item so that it is no longer in collection

myStack.peek()
=> most recent element added collection
Similiar to pop, but do not remove element from collection

myStack.count()
=> number of elements in stack


*** Additional Exercises:

Modify your stack to take a max capacity and return a string if you try to add an element when there's no more room:
myStack.push(value)
=> "Max capacity already reached. Remove element before adding a new one."

Create a contains method to check if a value is in the stack:
myStack.contains('findme')
=> true/false
What's the time complexity?

Create an until method to get the number of pops until you get to a certain value:
stack values - (first)2-5-7-3-6-9(last)
myStack.until(7)
=> 4
What's the time complexity?



 */

function Stack(capacity) {
  this._storage = {};
  this._count = 0;
}

Stack.prototype.push = function(value) {
  this._storage[this._count++] = value;
  return this._count;
};

// const myStack = new Stack();

// myStack.push('test 1');

// myStack.push('test 2');

// console.log(myStack);
// Time complexity:

Stack.prototype.pop = function() {
  // implement me...
  // i want to get the _count and minus 1 to get the last object key. 
  // once i have that i'll have to remove it
  let determineKeyToDelete = this._count - 1;
  const value = this._storage[determineKeyToDelete];
  delete this._storage[determineKeyToDelete];
  this._count = this._count - 1;
  console.log('value deleted: ' + value)
  console.log('this._storage: ' + JSON.stringify(this._storage, null, 2))
  return value;
};

// const myStack = new Stack();

// myStack.push('test 1');
// console.log(myStack)

// myStack.pop();
// console.log(myStack)

// Time complexity:

Stack.prototype.peek = function() {
  // implement me...
  // what is the last value added to the stack?
  let determineKeyToView = this._count - 1;
  const value = this._storage[determineKeyToView];
  return value;
};

const myStack = new Stack();

myStack.push('test 1');
console.log(myStack.peek())
// Time complexity:

Stack.prototype.count = function() {
  // implement me...
  const value = this._count;
  return value;
};
// Time complexity:

Stack.prototype.min = function() {
  // implement me...
  // I'd test if there is an object key equal to zero. If so I'd return 0. I think I misunderstand the assignment.
  // I may be able to use object keys via 'this'
  const storageKeys = Object.keys(this._storage);
  const smallestIndexValue = Math.min(storageKeys);
  console.log('test gathering of _storage keys: ' + JSON.stringify(storageKeys, null, 2))
  console.log('find the smallest key(index) value: ' + JSON.stringify(smallestIndexValue, null, 2))
  const minValue = this._storage[smallestIndexValue];
  return minValue;
};
// Time complexity:


/*
*** Exercises:

1.  Implement a stack with a min method which returns the minimum element currently in the stack.
    This method should have O(1) time complexity. Make sure your implementation handles duplicates.

2. Sort a stack so that its elements are in ascending order.

3.  Given a string, determine if the parenthesis in the string are balanced.
    Ex: balancedParens( 'sqrt(5*(3+8)/(4-2))' ) => true
    Ex: balancedParens( 'Math.min(5,(6-3))(' ) => false

4. Towers of Hanoi - https://en.wikipedia.org/wiki/Tower_of_Hanoi
You are given three towers (stacks) and N disks, each of different size. You can move the disks according to three constraints:
   1. only one disk can be moved at a time
   2. when moving a disk, you can only use pop (remove the top element) and push (add to the top of a stack)
   3. no disk can be placed on top of a disk that is smaller than it
The disks begin on tower#1. Write a function that will move the disks from tower#1 to tower#3 in such a way that none of the constraints are violated.
 */
