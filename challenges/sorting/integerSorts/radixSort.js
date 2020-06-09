const getDigit = (num, place) => {
	return Math.floor((num / 10 ** place)) % 10;
}

const digitCount = (num) => {
	if(num === 0) return 1;
	return Math.floor(Math.log10(Math.abs(num))) + 1;
}

const mostDigits = (arr) => {
	let winner = 0;
	arr.forEach(num => winner = Math.max(winner, digitCount(num)));
	return winner;
}

const radixSort = (arr) => {
	const maxDigits = mostDigits(arr);
	for(let i = 0; i < maxDigits; ++i) {
		const buckets = Array.from({length:19}, () => []);
		arr.forEach(num => {
			let digit = getDigit(num, i);
			buckets[digit + 9].push(num);
		})
		arr = [].concat(...buckets);
	}
	return arr;
}

// console.log(getDigit(-5038, 1)); // 3
// console.log(digitCount(-5038)); // 4
// console.log(mostDigits([5,2,3,503,-250, 0])); // 4
console.log(radixSort([-5,2,3,503,-250, 0]));