const selectionSort = (array) => {
	let min;
	for(let i = 0; i < array.length - 1; ++i) {
		min = i;
		for(let j = i + 1; j < array.length; ++j) {
			if(array[j] < array[min]) min = j;
		}
		if(i != min) [array[i], array[min]] = [array[min],array[i]];
	}
	return array;
}

console.log(selectionSort([5,2,7,11,95,3,25]))