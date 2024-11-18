function elemento(num1, num){
    for(let i =0; i< num1.length; i++){
        if( num1[i]=== num){
            return true
        }
    }

    return false;
}
const numeros=[10,20,30,40,50,60];
console.log(elemento(numeros, 10))
console.log(elemento(numeros,80));