function strings(s1, s2) {
  let str1 = "";
  let newString = s1 + s2;
  obj2 = checksDuplicates(newString);
  for (const key in obj2) {
    str1 += key;
  }
  return str1.split("").sort().join("");
}
function checksDuplicates(str) {
  let newArr = str.split("");
  let obj1 = {};
  newArr.forEach((letter) => {
    if (obj1.hasOwnProperty(letter)) {
      obj1[letter] += 1;
    } else {
      obj1[letter] = 1;
    }
  });
  return obj1;
}
console.log(strings("xyaabbbccccdefww", "xxxxyyyyabklmopq"));
