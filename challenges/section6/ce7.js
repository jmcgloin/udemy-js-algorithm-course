const maxSubarraySum = (numbers, size) => {
	if(size > numbers.length) return null;
	let max = 0;
	for(let i = 0, j = size; i < j; ++i) {
		max += numbers[i];
	}
	if(size == numbers.length) return max;
	let temp = max;
	for(let i = size, j = numbers.length; i < j; ++i) {
		temp = temp - numbers[i - size] + numbers[i];
		max = Math.max(temp, max);
	}
	return max;
}

console.log(maxSubarraySum([1,2,3,4], 2))// 7
console.log(maxSubarraySum([9,2,3,4], 2))// 11
console.log(maxSubarraySum([7,5,3,4], 3))// 15
console.log(maxSubarraySum([7,-5,3,4], 3))// 5
console.log(maxSubarraySum([1,2,3,4], 4))// 10
console.log(maxSubarraySum([1,2,3,4], 5))// null
