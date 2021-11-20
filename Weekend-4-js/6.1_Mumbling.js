const accum = (string) => {
  const mumblingString = [];
  const splitedStr = string.toLowerCase().split("");
  for (let i = 0; i < splitedStr.length; i++) {
    let str = splitedStr[i].toUpperCase();
    for (let j = 0; j < i; j++) {
      str += splitedStr[i];
    }
    mumblingString.push(str);
  }
  return mumblingString.join("-");
};
// console.log(accum("abcdefg"));
// console.log(accum("RqaEzty"));
// console.log(accum("cwAT"));
