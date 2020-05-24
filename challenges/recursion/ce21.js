const capitalizedWords = (words) => {
	let capWords = [];
	capWords.push(words[0].toUpperCase());
	return words.length > 1 ? capWords.concat(capitalizedWords(words.slice(1))) : capWords;
}

// course solution
// function capitalizeWords (array) {
//   if (array.length === 1) {
//     return [array[0].toUpperCase()];
//   }
//   let res = capitalizeWords(array.slice(0, -1));
//   res.push(array.slice(array.length-1)[0].toUpperCase());
//   return res;
 
// }


let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizedWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']