const mergeArrays = (a1, a2) => {
	let [i, j] = [0,0];
	let mergedArray = [];
	while(i < a1.length && j < a2.length) {
		if(a1[i] < a2[j]) {
			mergedArray.push(a1[i]);
			++i;
		} else {
			mergedArray.push(a2[j]);
			++j;
		}
	}
	return mergedArray.concat(a1.slice(i)).concat(a2.slice(j));
}

const mergeSort = (array) => {
	if(array.length > 1) {
		let half = Math.floor(array.length / 2);
		let left = mergeSort(array.slice(0,half));
		let right = mergeSort(array.slice(half));
		return mergeArrays(left, right);
	} else {
		return array;
	}
}

console.log(mergeSort([1,5,8,9,2,6,3,7]));