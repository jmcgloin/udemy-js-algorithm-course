const sumZero = (numbers = []) => {
	if(numbers.length < 2) return undefined;
	let pointer1 = 0;
	let pointer2 =  numbers.length -1;
	while(pointer1 < pointer2) {
		let [num1, num2] = [numbers[pointer1], numbers[pointer2]];
		if(num1 + num2 === 0) return [num1, num2];
		if(num1 + num2 > 0) {
			--pointer2;
		} else {
			++pointer1;
		}
	}
	return undefined;
}

console.log(sumZero([-3,1,2,3]));
console.log(sumZero());
console.log(sumZero([-3,1,2]));
console.log(sumZero([-3,0,1,2,3]));
console.log(sumZero([-3,0,1,2,]));
console.log(sumZero([-3,0,0,1,2,]));
