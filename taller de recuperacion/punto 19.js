function contarPalabra(array, palabra) {
    let contador = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === palabra) {
            contador++;
        }
    }
    return contador;
}

console.log(contarPalabra(["hola", "mundo", "hola"],"hola")); 
