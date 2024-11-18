let personas = [
    { nombre: "pedro", edad: 25 },
    { nombre: "agustin", edad: 32 },
    { nombre: "Martin", edad: 25 },
    { nombre: "Yamisuri", edad: 35 }
];



function filtrarPorPropiedad(arreglo, propiedad, valor) {
    return arreglo.filter(objeto => objeto[propiedad] === valor);//filter filtrar elementos de un arreglo en base a ciertas condiciones.
}

let resultado = filtrarPorPropiedad(personas, "edad", 25);
console.log(resultado);