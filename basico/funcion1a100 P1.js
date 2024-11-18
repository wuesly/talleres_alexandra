/*/function numero (){
   
    for(i=1; i<=100; i++){
            console.log(i)
        }
    }
numero()

/*/
let boton = document.querySelector('#ok');
boton.addEventListener('click', () => {
    let inicio = document.querySelector('#inicio').value;
    let fin = document.querySelector('#fin').value;
    llenarArreglo(inicio,fin)
})
function llenarArreglo(inicio,fin) {
    let numeros = [];
    for (let i = inicio; i <= fin; i++){
        numeros.push(i);//numeros[i]=i
    }
    recorrerArreglo(numeros);
}
function recorrerArreglo(numeros) {
    numeros.forEach(numero => {
        console.log(numero)
    })
}
llenarArreglo();