/* const stack = [];


// push
stack.push('dog');
stack.push('cat');
stack.push('bear');

//pop
stack.pop();

console.log(stack);
// peek
stack[stack.length - 1];
 */

// stacks are array like structures and the works in LIFO (Last in First Out) principle
// The name stack comes from the analogy to a set of physical items e.g., DVD disc, books, stacked on top each other.
/* Example of stack application is to reverse a word. we push a word into the stack, letter by letter, and pop the letters from the stack.
Undo mechanism in text editors, syntax parsing, function call, and expression conversion. */
/* 
class Stack {
	constructor() {
		this.storage = {};
		this.size = 0;
	}
	push(element) {
		this.size++;
		this.storage[this.size] = element;
	}
	pop() {
		let removed = this.storage[this.size];
		delete this.storage[this.size];
		this.size--;
		return removed;
	}
	peek() {
		return this.storage[this.size];
	}
}

const stack = new Stack();
stack.push('dog');
stack.push('cat');
stack.push('bear');
console.log(stack);
stack.pop();
console.log(stack);
stack.peek();
console.log(stack);
 */

//Reversing a string using a stack

function reverse(str) {
	let stack = [];
	//pushing letter into stack
	for (let i = 0; i < str.length; i++) {
		stack.push(str[i]);
	}

	//pop letter from the stack
	let reverseStr = '';
	while (stack.length > 0) {
		reverseStr += stack.pop();
	}
	return reverseStr;
}
console.log(reverse('bikram'));
