function generarAl(cantidad) {
    let array = [];
    for (let i = 0; i < cantidad; i++) {
        array.push(Math.floor(Math.random() * 100) + 1);
    }
    return array;
}
console.log(generarAl(1));
