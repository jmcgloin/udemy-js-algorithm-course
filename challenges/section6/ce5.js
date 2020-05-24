//bonus: time O(n), space O(1)

const averagePair = (numbers = [], goal = false) => {
	if(goal === false || goal === NaN) return false;
	let [i, j] = [0, numbers.length -1];
	while(i < j) {
		let average = (numbers[i] + numbers[j]) / 2.0;
		if(average == goal) return true;
		average > goal ? j-- : i++;
	}
	return false
}

console.log(averagePair([1,2,3], 2.5));
console.log(averagePair([1,3,3,5,6,7,10,12,19], 5.5));
console.log(averagePair([-1,0,3,4,5,6],4.1));
console.log(averagePair([], 4));