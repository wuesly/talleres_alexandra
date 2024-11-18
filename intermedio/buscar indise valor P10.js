let numeros = [10, 20, 30, 40, 50];
let valorBuscado = 50;
/*/
function buscarIndice(arreglo, valor) {
    for (let i = 0; i < arreglo.length; i++) {
      if (arreglo[i] === valor) {
        return i; // Retorna el índice si el valor es encontrado
      }
    }
    return -1; // Retorna -1 si el valor no se encuentra en el arreglo
  }
  
  let indice = buscarIndice(numeros, valorBuscado);
  
  if (indice !== -1) {
    console.log(`El valor ${valorBuscado} se encuentra en el índice: ${indice}`);
  } 
  else {
    console.log(`El valor ${valorBuscado} no se encuentra en el arreglo.`);
  }
/*/
numeros.forEach(numeros =>{
  if(numeros=== valorBuscado){
    console.log("el valor eta dentro")  
  }
});
 