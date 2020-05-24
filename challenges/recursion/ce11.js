const factorial = (num) => {
	return num === 0 ? 1 : num * factorial(--num);
}

console.log(factorial(3)); // 6
console.log(factorial(0)); // 3
console.log(factorial(4)); // 24
console.log(factorial(5)); // 120
