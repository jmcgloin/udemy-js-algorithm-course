// const validAnagram = (inputStr, anagramStr) => {
// 	inputChars = {};
// 	anagramChars = {};
// 	if(inputStr.length !== anagramStr.length) return false;
// 	for(let char of inputStr) {
// 		inputChars[char] = (inputChars[char] || 0) + 1;
// 	}
// 	for(let char of anagramStr) {
// 		anagramChars[char] = (anagramChars[char] || 0) + 1;
// 	}
// 	for(let key in inputChars) {
// 		// console.log(`input - key: ${key}; char: ${inputChars[key]}`)
// 		// console.log(`anagram - key: ${key}; char: ${anagramChars[key]}`)
// 		if(!anagramChars[key]) return false;
// 		if(anagramChars[key] != inputChars[key]) return false;
// 	}
// 	return true;
// }


function validAnagram(str1, str2) {
        //store words and their repeataion into number in a new object for both
        let frequencyCounter1 = {};
        let frequencyCounter2 = {};
        let result = false;
 
        for (let i = 0; i < str1.length; i++) {
          frequencyCounter1[str1[i]] = (frequencyCounter1[str1[i]] || 0) + 1;
        }
 
        for (let i = 0; i < str2.length; i++) {
          frequencyCounter2[str2[i]] = (frequencyCounter2[str2[i]] || 0) + 1;
        }
 
        //compare if both array items match
        for (let key in frequencyCounter1) {
          if (
            key in frequencyCounter2 &&
            frequencyCounter2[key] === frequencyCounter1[key]
          ) {
            result = true;
          } else {
            result = false;
            return false;
          }
        }
        return result;
      }


console.log(validAnagram("aas","asa"));
console.log(validAnagram("aa","aaa"));
console.log(validAnagram("aas","bgg"));
console.log(validAnagram("",""));
console.log(validAnagram("","asa"));
console.log(validAnagram("ass","asa"));