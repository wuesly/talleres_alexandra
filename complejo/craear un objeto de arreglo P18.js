function crear_ObjetoDesde_Pares(pares) {
    return Object.fromEntries(pares);//fromEntries transforma una lista de pares en un objeto
}
let pares = [
    ["nombre", "Rocio"],
    ["edad", 25],
    ["ciudad", "Rusia"]
];

let objeto = crear_ObjetoDesde_Pares(pares);
console.log(objeto);