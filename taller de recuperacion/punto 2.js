function sumaArray(array) {
    return array.reduce((total, num) => total + num, 0);
}
console.log(sumaArray([1, 2, 3, 4]));
