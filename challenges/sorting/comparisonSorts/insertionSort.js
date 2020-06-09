const insertionSort = (array) => {
	for(let i = 1, j = array.length; i < j; ++i) {
		let currentVal = array[i];
		for(var k = i - 1; k >= 0 && array[k] > currentVal; --k) {
			array[k + 1] = array[k];
		}
		array[k + 1] = currentVal;
	}
	return array;
}

console.log(insertionSort([88,5,21,3,54,6,35]));