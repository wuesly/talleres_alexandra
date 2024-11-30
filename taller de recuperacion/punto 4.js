function invertirString(invertir) {
    let invertido = "";
    for (let i = invertir.length - 1; i >= 0; i--) {
        invertido += invertir[i];
    }
    return invertido;
}

console.log(invertirString("hola")); 