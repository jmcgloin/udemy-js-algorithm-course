class Node{
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class SinglyLinkedList{
	constructor() {
		this.length = 0;
		this.head = null;
		this.tail = null;
	}

	push(val) {
		let newNode  = new Node(val);
		if(this.length === 0) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			this.tail = newNode
		}
		this.length++;
		return this;
	}

	pop() {
		if(!this.tail) return;
		let curNode = this.head;
		while(curNode && curNode.next != this.tail) {
			curNode = curNode.next;
		}
		let tail = this.tail;
		this.tail = curNode;
		if(this.length === 1) this.head = null;
		else this.tail.next = null;
		this.length--;
		return tail;
	}

	shift() {
		if(!this.head) return;
		let head = this.head;
		this.head = this.head.next;
		this.length--;
		if(this.length === 0) this.tail = null;
		return head;
	}

	unshift(val) {
		let newNode = new Node(val);
		newNode.next = this.head;
		this.head = newNode;
		if(this.length === 0) this.tail = this.head;
		this.length++;
		return this;
	}

	get(index) {
		if(!this.head) return undefined;
		if(index >= this.length || index < 0) return undefined;
		let curNode = this.head;
		for(let i = 0; i < index; ++i) {
			curNode = curNode.next
		}
		return curNode;
	}

	set(index, newVal) {
		let curNode = this.get(index)
		if(curNode) {
			curNode.val = newVal;
			return curNode
		} else {
			return false;
		}
	}

	insert(index, newVal) {
		if(index < 0 || index > this.length) return false;
		if(index === 0) return !!this.unshift(newVal);
		if(index === this.length) return !!this.push(newVal);
		let curNode = this.get(index);
		let newNode = new Node(newVal);
		let prevNode = this.get(index - 1)
		prevNode.next = newNode;
		newNode.next = curNode;
		this.length++;
		return true;
	}

	remove(index) {
		if(index < 0 || index >= this.length) return false;
		if(index === 0) return !!this.shift();
		if(index === this.length) return !!this.pop();
		let prevNode = this.get(index - 1);
		let curNode = this.get(index);
		prevNode.next = curNode.next;
		this.length--;
		return curNode;
	}

	reverse() {
		let [leftInd,rightInd] = [0,this.length - 1];
		while(leftInd < rightInd) {
			let [left,right] = [this.get(leftInd),this.get(rightInd)];
			[left.val, right.val] = [right.val, left.val];
			leftInd++;
			rightInd--;
		}
		return this;
	}

	print() {
		let arr = []
		for(let i = 0; i < this.length; i++) {
			arr.push(this.get(i));
		}
		return arr;
	}
}



let list = new SinglyLinkedList()
console.log(list.push("HELLO"));
console.log(list.push("GOODBYE"));
console.log(list.push("ALOHA"));
console.log(list.push("!"));
// console.log(list.push("!"));
console.log(list.pop());
console.log(list);
console.log(list.pop());
console.log(list);
console.log(list.shift());
console.log(list);
console.log(list.shift());
console.log(list);
console.log(list.unshift("GOODBYE"));
console.log(list.unshift("HELLO"));
console.log(list.push("ALOHA"));
console.log(list.push("!"));
console.log(list.length);
console.log(list.get(2));
console.log(list.get(3));
console.log(list.get(6));
console.log(list.length);
console.log(list.get(-12));
console.log(list.set(3, '<3'));
console.log(list.set(8, '!!!'));
console.log(list.insert(2, "Ni Hao"));
console.log(list.length);
console.log(list.insert(list.length, "Zai Jian"));
console.log(list.length);
console.log(list.insert(list.length + 5, "Zai Jian"));
console.log(list.length);
console.log(list.insert(-5, "Zai Jian"));
console.log(list.length);
console.log(list.remove(3));
console.log(list.remove(-1));
console.log(list.remove(list.length + 1));
console.log(list);
console.log(list.print());
console.log(list.head);
console.log(list.tail);
console.log(list.reverse());
console.log(list.print());
console.log(list.head);
console.log(list.tail);