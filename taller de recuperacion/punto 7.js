function esPalindromo(palabra) {
    let longitud = palabra.length;
    for (let i = 0; i < Math.floor(longitud / 2); i++) {
        if (palabra[i] !== palabra[longitud - 1 - i]) {
            return false; 
        }
    }
    return true; 
}
console.log(esPalindromo("radar")); 
console.log(esPalindromo("hola"));  
