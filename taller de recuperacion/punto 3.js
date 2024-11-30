function maxEnArray(array) {
    let maximo = array[0]; 
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maximo) {
            maximo = array[i];
        }
    }
    return maximo;
}

console.log(maxEnArray([5, 10, 20, 8])); 

