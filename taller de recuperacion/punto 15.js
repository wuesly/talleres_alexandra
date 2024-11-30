function encontrarDuplicados(array) {
    let duplicados = [];
    let conteo = {};
    for (let num of array) {
        conteo[num] = (conteo[num] || 0) + 1;
        if (conteo[num] === 2) {
            duplicados.push(num);
        }
    }
    return duplicados;
}

console.log(encontrarDuplicados([1, 2, 3, 2, 4, 1]));
