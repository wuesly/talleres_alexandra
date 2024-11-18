const personas = [
    { nombre: "estaban", edad: 19 },
    { nombre: "isabel", edad: 20 },
    { nombre: "lisandro", edad: 30 },
    { nombre: "maria", edad: 15 }
];


function agruparPorPropiedad(arreglo, propiedad) {
    return arreglo.reduce((grupo, objeto) => {
        const valorPropiedad = objeto[propiedad];
        if (!grupo[valorPropiedad]) {
            grupo[valorPropiedad] = [];
        }
        grupo[valorPropiedad].push(objeto);//agrega uno o más elementos al final de un arreglo y devuelve la longitud resultante del arreglo
        return grupo;
    }, {});
}

const resultado = agruparPorPropiedad(personas, "edad");
console.log(resultado);