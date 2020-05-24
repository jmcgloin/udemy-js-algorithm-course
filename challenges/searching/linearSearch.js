const linearSearch = (array, test) => {
	for(let i = 0, j = array.length; i < j; ++i) {
		if(array[i] == test) return i;
	}
	return -1;
}

console.log(linearSearch([1,2,3,4,5], 5)); // 4
console.log(linearSearch([1,2,3,4,5], 1)); // 0
console.log(linearSearch([1,2,3,4,5], 6)); // -1
console.log(linearSearch([1,2,3,'apple',5], 'apple')); // 3