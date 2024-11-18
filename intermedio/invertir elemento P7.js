let arregloOriginal = [1, 2, 3, 4, 5];
let arregloInvertido=[]
/*/
function inverteArreglo(arreglo) {
    return arreglo.reverse();
}
let arregloInvertido = inverteArreglo(arregloOriginal.slice());

console.log(arregloInvertido);
/*/

arregloOriginal.forEach((arreglo) =>{
   arregloInvertido[arreglo]=arreglo
        
});
let objetoInvertido = Object.values(arregloInvertido.reverse)
console.log (arregloInvertido)

