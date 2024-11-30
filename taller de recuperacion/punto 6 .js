function ordenarArray(array) {
    for (let i = 0; i < array.length; i++) {
        let indiceMenor = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[indiceMenor]) {
                indiceMenor = j;
            }
        }
        if (i !== indiceMenor) {
            let temp = array[i];
            array[i] = array[indiceMenor];
            array[indiceMenor] = temp;
        }
    }
    return array;
}

console.log(ordenarArray([5, 3, 8, 1]));

