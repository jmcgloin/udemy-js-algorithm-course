const productOfArray = (arr = []) => {
	return arr.length === 0 ? 1 : arr[0] * productOfArray(arr.slice(1));
}

console.log(productOfArray([1,2,3,4])); // 24
console.log(productOfArray([0,2,10,4])); // 0
console.log(productOfArray([1,2,10,4])); // 80
console.log(productOfArray([0])); // 0