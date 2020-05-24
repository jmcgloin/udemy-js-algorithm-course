const power = (num, pow) => {
	if(pow === 0) return 1;
	return num * power(num, --pow);
}

console.log(power(2,0)); // 1;
console.log(power(0,5)); // 0;
console.log(power(2,3)); // 8;
console.log(power(4,1)); // 4;
