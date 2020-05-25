const mergingArrays = (a1, a2) => {
	let [i, j] = [0,0];
	let mergedArray = [];
	while(i < a1.length && j < a2.length) {
		if(a1[i] <= a2[j]) {
			mergedArray.push(a1[i]);
			++i;
		} else {
			mergedArray.push(a2[j]);
			++j;
		}
	}
	return mergedArray;
}

console.log(mergingArrays([1,5,8],[2,3,6,7]));