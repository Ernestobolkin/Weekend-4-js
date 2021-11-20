let result = 0;
function Rectangle (length,width){
  result = 2*(length+width);
  return result;
}

console.log(Rectangle(6,7))//26
console.log(Rectangle(20,10))//60