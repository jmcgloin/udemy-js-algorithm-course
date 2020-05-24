const factorial = (num) => {
	if(num == 1) return 1;
	return num * factorial(--num);
}

console.log(factorial(5)); // 120
console.log(factorial(6)); // 720
console.log(factorial(3)); // 6