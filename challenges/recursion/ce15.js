const reverse = (str) => {
	if(str.length <= 1) return str;
	return reverse(str.substring(1)) + str[0];
}

console.log(reverse("hello")); //olleh
console.log(reverse("")); //olleh
console.log(reverse("asdfg")); //olleh