const personas = [
    { nombre: "Juan", edad: 29 },
    { nombre: "María", edad: 33 },
    { nombre: "Pedro", edad: 40 },
    { nombre: "Laura", edad: 15 }
];

function ordenar_PorPropiedad(arreglo, propiedad) {
    return arreglo.sort((a, b) => (a[propiedad] > b[propiedad]) ? 1 : -1);//sort ordena los elementos de un arreglo y devuelve el arreglo ordenado
}

const resultado = ordenar_PorPropiedad(personas, "edad");
console.log(resultado);