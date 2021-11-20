const countingDuplicates = (str) => {
  const loweCase = str.toLowerCase().split("");
  let result = {};
  let counter = 0;
  for (let i = 0; i < loweCase.length; i++) {
    if (result[loweCase[i]]) {
      result[loweCase[i]] += 1;
    } else {
      result[loweCase[i]] = 1;
    }
  } 
  for (const key in result) {
    if (result[key] > 1) {
      counter++;
    }
  }
  return counter;
};
console.log(countingDuplicates("aabbbc")); // 2
console.log(countingDuplicates("aabc")); // 1
console.log(countingDuplicates("abc")); // 0
console.log(countingDuplicates("ABBAACCDD")); // 2
