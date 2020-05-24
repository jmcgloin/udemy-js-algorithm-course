const maxSum = (array, qty) => {
	if(array.length < qty || qty === 0) return undefined;
	let max;
	let tempSum = 0;
	for(let i = 0; i < qty; i++) {
		tempSum += array[i];
	}
	max = tempSum;
	for(let i = 0, j = array.length - qty - 1; i < j; i++) {
		tempSum = tempSum - array[i] + array[i + qty];
		max = Math.max(max, tempSum);
	}
	return max;
}

console.log(maxSum([1,2,3,2,4,2,1,0,-1,5], 3));
console.log(maxSum([1,2,3,2,4,2,1,0,-1,5], 5));
console.log(maxSum([1,2,3,2,4,2,1,0,-1,5], 50));
console.log(maxSum([], 0));