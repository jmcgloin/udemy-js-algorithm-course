const bubbleSort = (array) => {
	let swapped;
	for(let i = array.length; i > 1; --i) {
		swapped = false;
		for(let j = 0; j < i - 1; ++j) {
			if(array[j] > array[j + 1]) {
				[array[j], array[j + 1]] = [array[j + 1], array[j]];
				swapped = true;
			}
		}
		console.log("one cycle");
		if(!swapped) return array;
	}
	return array;
}

console.log(bubbleSort([4,7,1,10,9,2]));
console.log(bubbleSort([4,7,2,8,10,11]));
console.log(bubbleSort([11,2,4,7,8,10]));