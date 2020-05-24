const minSubArrayLen = (numbers, limit) => {
	let left = 0, right = 0;
	let numLen = numbers.length;
	let minLen = numLen + 1;
	let sum = numbers[0];
	while(left < numLen) {
		if(sum >= limit) {
			minLen = Math.min(minLen, right - left + 1);
			right = right == left ? ++right : right;
			sum -= numbers[left];
			++left;
		} else {
			++right;
			if(right == numLen) {
				minLen = minLen > numLen ? 0 : minLen;
				return minLen;	
			}
			sum += numbers[right];
		}
	}
	minLen = minLen > numLen ? 0 : minLen;
	return minLen;
}

console.log(minSubArrayLen([1,3,1,2,4,8],7)); // expect 2;