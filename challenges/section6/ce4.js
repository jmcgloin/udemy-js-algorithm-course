// are there duplicates
// Implement a function called, areThereDuplicates which accepts a variable number of arguments,
// and checks whether there are any duplicates among the arguments passed in.
// You can solve this using the frequency counter pattern OR the multiple pointers pattern.
//Restrictions: Time O(n), Space O(n)
// Bonus: Time O(nlogn), Space O(1)

const areThereDuplicates = (...args) => {
	args.sort();
	for(let i = 0, j = args.length; i < j - 1; i ++) {
		if(args[i] === args[i + 1]) return true
	}
	return false;
}

console.log(areThereDuplicates(1, 2, 3))
console.log(areThereDuplicates(1, 2, 2))
console.log(areThereDuplicates('a', 'b', 'c', 'a'))