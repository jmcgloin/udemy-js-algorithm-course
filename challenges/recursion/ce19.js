const capitalizeFirst = (array) => {
	if(array.length === 0) return;
	let capArray = [];
	let capWord = "";
	let word = array[0];
	for(let i = 0, j = word.length; i < j; ++i) {
		capWord += i === 0 ? word[i].toUpperCase() : word[i];
	}
	capArray.push(capWord);
	return array.length > 1 ? capArray.concat(capitalizeFirst(array.slice(1))) : capArray;
}

// course solution
// function capitalizeFirst (array) {
//   if (array.length === 1) {
//     return [array[0][0].toUpperCase() + array[0].substr(1)];
//   }
//   const res = capitalizeFirst(array.slice(0, -1));
//   const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length-1)[0].substr(1);
//   res.push(string);
//   return res;
// }

console.log(capitalizeFirst(['asd','fgh','jkl']));
console.log(capitalizeFirst(['a','','jkl']));
console.log(capitalizeFirst(['asd','fgh','jkl']));
