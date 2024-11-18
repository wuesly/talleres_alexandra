let numeros = [10, 20, 30, 40, 50];

/*/
function reemplazarElemento(arreglo, valorAntiguo, valorNuevo) {
    let indice = arreglo.indexOf(valorAntiguo); // Busca el índice del valor antiguo
    if (indice !== -1) {
      arreglo[indice] = valorNuevo; // Reemplaza el valor si lo encuentra
      return true; // Indica que se realizó el reemplazo
    }
    return false; // Indica que el valor no fue encontrado
  }
  
  let resultado = reemplazarElemento(numeros, valorAntiguo, valorNuevo);
  
  if (resultado) {
    console.log("Arreglo actualizado:", numeros);
  } 
  else {
    console.log("El valor a reemplazar no se encontró en el arreglo.");
  }
    /*/

    function reemplazarElemento(arreglo, valorAntiguo, valorNuevo) {
        let indice = arreglo.indexOf(valorAntiguo); // Busca el índice del valor antiguo
        if (indice !== -1) {
            arreglo[indice] = valorNuevo; // Reemplaza el valor si lo encuentra
            return true; // Indica que se realizó el reemplazo
        }
        return false; // Indica que el valor no fue encontrado
    }
    
    function reemplazarYMostrar() {
        // Obtiene los valores del formulario
        let valorAntiguo = parseInt(document.getElementById('valorAntiguo').value);
        let valorNuevo = parseInt(document.getElementById('valorNuevo').value);
    
        // Llama a la función para reemplazar el elemento
        let resultado = reemplazarElemento(numeros, valorAntiguo, valorNuevo);
    
        // Muestra el resultado en el DOM
        let resultadoElemento = document.getElementById('resultado');
        if (resultado) {
            resultadoElemento.textContent = `Arreglo actualizado: [${numeros.join(", ")}]`;
        } else {
            resultadoElemento.textContent = "El valor a reemplazar no se encontró en el arreglo.";
        }
    }
    