// const binarySearch = (array, match) => {
// 	let [left, right] = [0, array.length - 1];
// 	let half = getHalf(left,right);
// 	while(left <= right) {
// 		if(array[half] == match) {
// 			return half;
// 		} else if(match > half) { //right of
// 			left = half + 1;
// 			half = getHalf(left,right);
// 		} else { //left of
// 			right = half - 1;
// 			half = getHalf(left,right);
// 		}
// 	}
// 	return -1;
// }


const binarySearch = (array, match) => {
	let [left, right] = [0, array.length];
	let half = getHalf(left,right);
	while(left < right) {
		if(array[half] == match) return half;
		else if(match > array[half]) left = half + 1;
		else right = half;
		half = getHalf(left, right);
	}
	return - 1;
}

const getHalf = (l,r) => Math.floor((l+r)/2);

console.log(binarySearch([1,2,3,4],2)); // 1
console.log(binarySearch([1,2,3,4,5,6,7],5)); // 4
console.log(binarySearch([1,2,3,4,5],3)); // 2
console.log(binarySearch([1,2,3,4],7)); // -1
