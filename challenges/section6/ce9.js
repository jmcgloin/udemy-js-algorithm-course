const findLongestSubstring = (str = '') => {
	let strLen = str.length;
	if(strLen === 0) return 0;
	if(strLen === 1) return 1;
	let left = 0;
	let right = 0;
	let longest = 0;
	let record = {};
	while(right < strLen) {
		if(record[str[right]] == undefined) {
			record[str[right]] = right;
			longest = Math.max(longest, right - left + 1);
			++right;
		} else {
			if(left == record[str[right]] + 1) ++right;
			record[str[left]] = undefined;
			++left;
		}
	}
	return longest;
}

console.log("longest", findLongestSubstring('abadefhg')); // 7
console.log("longest", findLongestSubstring('abcdefhg')); // 8
console.log("longest", findLongestSubstring('abbbbbb')); // 2
console.log("longest", findLongestSubstring('aaaaaaaaa')); // 1
console.log("longest", findLongestSubstring()); // 0
