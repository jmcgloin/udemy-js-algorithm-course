// const stringSearch = (string, match) => {
// 	if(string.length === 0 || match.length === 0) return 0;
// 	let count = 0;
// 	let pointer = 0;
// 	for(let i = 0, j = string.length; i < j; ++i) {
// 		if(string[i] === match[pointer]) {
// 			if(pointer === match.length - 1) {
// 				count++;
// 				i -= (pointer);
// 				pointer = 0;
// 			} else {
// 				pointer++;
// 			}
// 		} else {
// 			pointer = 0;
// 		}
// 	}
// 	return count;
// }


const stringSearch = (string, match) => {
	if(string.length === 0 || match.length === 0) return 0;
	let count = 0;
	let sub = "";
	for(let i = 0, j = string.length - match.length; i < j; ++i) {
		sub = string.substring(i, i + match.length);
		if(sub == match) ++count;
	}
	return count;
}


console.log(stringSearch("bbabbbab", "bb")); // 3
console.log(stringSearch("aaabbbaa", "bbb")); // 1
console.log(stringSearch("aaabbbaa", "aaa")); // 1
console.log(stringSearch("aaabbbaa", "bbbb")); // 0
console.log(stringSearch("aaabbbaa", "")); // 0
console.log(stringSearch("", "bbb")); // 0