const flatten = (input) => {
	let flatArray = [];
	for(let el of input) {
		if(Array.isArray(el)) {
			flatArray = flatArray.concat(flatten(el));
		} else {
			flatArray.push(el);
		}
	}
	return flatArray;
};

console.log(flatten([1, 2, 3, [4, 5] ])) // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
console.log(flatten([[1],[2],[3]])) // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3]