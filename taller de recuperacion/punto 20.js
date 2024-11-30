function crearObjeto(claves, valores) {
    let objeto = {};
    for (let i = 0; i < claves.length; i++) {
        objeto[claves[i]] = valores[i];
    }
    return objeto;
}
console.log(crearObjeto(["nombre", "edad"], ["Juan", 30])); 
