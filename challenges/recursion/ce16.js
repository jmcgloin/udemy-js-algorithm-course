const isPalindrome = (str) => {
	if(str.length <= 1) return true
	return str[0] == str[str.length - 1] ? isPalindrome(str.substring(1, str.length - 1)) : false
}

console.log(isPalindrome("asdfgfdsa")); // true
console.log(isPalindrome("asdfgdsa")); // false
console.log(isPalindrome("asdffdsa")); // true
console.log(isPalindrome("Am I I mA")); // true
console.log(isPalindrome("a")); // true
