 let numeros = [10, 20, 30, 40, 50];
/*/
function calcularPromedio(arreglo) {
    if (arreglo.length === 0) {
      return 0; // Retorna 0 si el arreglo está vacío para evitar división por cero
    }
    
    let suma = arreglo.reduce((acumulador, valor) => acumulador + valor, 0);
    let promedio = suma / arreglo.length;
    
    return promedio;
  }
 
   let promedio = calcularPromedio(numeros);
  console.log("El promedio es:", promedio);
/*/
function calcularPromedio(arreglo) {
  if (arreglo.length === 0) {
      return 0; // Retorna 0 si el arreglo está vacío para evitar división por cero
  }

  let suma = 0;
  arreglo.forEach(valor => {
      suma += valor; // Suma cada valor al acumulador
  });
  
  let promedio = suma / arreglo.length;
  return promedio;
}

function calcularYMostrarPromedio() {
  // Obtiene el valor ingresado en el formulario
  let numerosTexto = document.getElementById('numeros').value;

  // Convierte el texto en un arreglo de números
  let numeros = numerosTexto.split(',').map(Number).filter(valor => !isNaN(valor));

  // Calcula el promedio usando la función `calcularPromedio`
  let promedio = calcularPromedio(numeros);

  // Muestra el resultado en el DOM
  let resultadoElemento = document.getElementById('resultado');
  resultadoElemento.textContent = `El promedio es: ${promedio}`;
}
