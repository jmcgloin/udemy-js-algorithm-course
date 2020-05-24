function sameFrequency(val1, val2){
  let [str1, str2] = [val1.toString(), val2.toString()];
  if(str1.length != str2.length) return false;
  let length = str1.length;
  const obj1 = {};
  const obj2 = {};
  for(let i = 0; i < length; i++) {
    obj1[str1[i]] = (obj1[str1[i]] || 0) + 1;
    obj2[str2[i]] = (obj2[str2[i]] || 0) + 1;
  }
  const keys = Object.keys(obj1);
  for(let i = 0, j = keys.length; i < j; i++) {
    if(obj1[keys[i]] != obj2[keys[i]]) return false;
  }
  return true;
}

console.log(sameFrequency(123,321));
console.log(sameFrequency(123,322));
console.log(sameFrequency(123,32));