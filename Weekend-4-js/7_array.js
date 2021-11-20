const someArr = ['ernest','tobolkin','bootcamp']
let arr = [];
someArr.forEach((element)=>{
  arr.push(element.charAt(0).toUpperCase()+element.slice(1))
})
// console.log(arr)

const result = someArr.filter(words => words.length > 6)
// console.log(result)

const array = [2,4,6,8]
const resultMap = array.map((numbers)=> numbers * 10)
console.log(resultMap)
