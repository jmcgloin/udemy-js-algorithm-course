const pivot = (arr, start = 0, end = arr.length + 1) => {
	let count = start;
	let pivot = arr[start];
	const swap = (arr, id1, id2) => { [arr[id1],arr[id2]] = [arr[id2],arr[id1]] };
	for(let i = start + 1, j = arr.length; i < j; ++i) {
		if(arr[i] < pivot) {
			++count;
			swap(arr,count,i);
		}
	}
	swap(arr,start,count);
	return count;
}

const quickSort = (arr, left = 0, right = arr.length - 1) => {
	if(left >= right) return;
	let pivotIdx = pivot(arr, left, right);
	quickSort(arr, left, pivotIdx - 1);
	quickSort(arr, pivotIdx + 1, right);
	return arr;
}

// console.log(pivot([4,1,7,9,33,2])); // #> [1,2,4,9,33,7] // 2
console.log(quickSort([4,1,7,9,33,2]));
console.log(quickSort([44,-51,107,9,33,-2]));