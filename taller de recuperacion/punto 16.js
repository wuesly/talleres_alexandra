
console.log(elementosComunes([1, 2, 3], [3, 4, 5])); 

function elementosComunes(array1, array2) {
    let comunes = [];
    for (let i = 0; i < array1.length; i++) {
        if (array2.includes(array1[i])) {
            comunes.push(array1[i]);
        }
    }
    return comunes;
}

console.log(elementosComunes([1, 2, 3], [3, 4, 5]));
