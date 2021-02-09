function Triangulo (a,b,c){

    if ((a+b)> c && (b+c) > a && (c + a) > b){
  
        if (a == b && a == c && c == b){
         var nome = "Equilatero";
          
        }

        else if (a != b && a != c && c != b){
            var nome = "Escaleno"
        }
        else {
            var nome = "Isoceles"
        }
  
  
      return nome
     
    }
    else{
      console.log('none')
    }
  }
  
  console.log(Triangulo(10,10,10))
