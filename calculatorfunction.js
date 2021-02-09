function Calculadora (a,b,op){
  if (op == '+' ){
    return a + b
  }
  else if (op == '-'){
    return a - b
  }
  else if (op == '*'){
    return a * b 
  }
  else if (op == '/'){
    return a / b
  }
}

console.log(Calculadora(2,1,'+'))
