const countUniqueValues = (values) => {
	if(values.length === 0) return 0;
	if(values.length === 1) return 1;
	let pointer1 = 0;
	let pointer2 = 1;
	let count = 1;
	let length = values.length;
	while(pointer2 < length) {
		let [val1, val2] = [values[pointer1],values[pointer2]];
		if(val1 != val2) {
			count++;
			pointer1 = pointer2;
			pointer2++;
		} else {
			pointer2++;
		}
	}
	return count;
}

console.log(countUniqueValues([1,1,1,2]));
console.log(countUniqueValues([1,1,1]));
console.log(countUniqueValues([-1,1,1,0,2]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([1]));