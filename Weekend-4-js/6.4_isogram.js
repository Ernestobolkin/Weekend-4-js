function isIsogram(str) {
  let arr = str.toLowerCase().split("").sort();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] === arr[i]) {
      return false;
    }
  }
  return true;
}

console.log(isIsogram("wasdfgerty")); //
console.log(isIsogram("moOse")); //false
console.log(isIsogram("aba"));
