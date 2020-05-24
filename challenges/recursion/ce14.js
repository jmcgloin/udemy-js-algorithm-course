const fib = (nth, ith = 1, jth = 1) => {
	if(nth === 1) {
		return ith;
	} else if(nth === 2) {
		return jth;
	} else {
		return fib(--nth, jth, ith + jth);
	}
}

// Solution from Colt Steele course
// function fib(n){
//     if (n <= 2) return 1;
//     return fib(n-1) + fib(n-2);
// }

// fib(4) -> fib(3) + fib(2) -> fib(2) + fib(1) + 1 -> 1 + 1 + 1

console.log(fib(4)); // 3
console.log(fib(1)); // 1
console.log(fib(28)); // 317811
