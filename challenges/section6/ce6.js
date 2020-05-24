const isSubsequence = (sub, sequence) => {
	let [p1, p2, len1, len2] = [0,0, sub.length, sequence.length];
	if(len1 > len2) return false;
	while(p2 <= len2) {
		if(p1 == len1) return true;
		(sub[p1] == sequence[p2]) && ++p1;
		++p2;
	}
	return false;
}


console.log(isSubsequence('hello', 'hello world'));
console.log(isSubsequence('hllo', 'hllo'));
console.log(isSubsequence('hello', 'world'));
console.log(isSubsequence('hello', 'hweolrldo'));
console.log(isSubsequence('', 'hello world'));