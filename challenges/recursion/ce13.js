const recursiveRange = (limit) => {
	return limit === 0 ? 0 : limit + recursiveRange(--limit);
};

console.log(recursiveRange(7)); // 28
console.log(recursiveRange(0)); // 0
console.log(recursiveRange(3)); // 6
console.log(recursiveRange(100)); // 5050