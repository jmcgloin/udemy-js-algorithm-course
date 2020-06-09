const findLongestSubstring = (str = '') => {
	let length = str.length;
	if(length <= 1) return length;
	let record = {};
	let currentCount = 0;
	let maxCount = 0;
	for(let i = 0; i < length; ++i) {
		let char = str[i];
		if((!record[char] && record[char] != 0) || record[char] === -1) {
			record[char] = i;
			currentCount++;
		} else {
			currentCount = i - record[char];
			record[char] = i;
		}
		maxCount = Math.max(maxCount, currentCount);
	}
	return maxCount;
}

console.log("longest", findLongestSubstring('abadefhg')); // 7
console.log("longest", findLongestSubstring('abcdefhg')); // 8
console.log("longest", findLongestSubstring('abbbbbb')); // 2
console.log("longest", findLongestSubstring('aaaaaaaaa')); // 1
console.log("longest", findLongestSubstring()); // 0
