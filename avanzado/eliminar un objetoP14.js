/*/
let eliminar_personas =() =>{
    let personas =[
        {nombres: 'ana', edad: 25},
        {nombres: 'Daniel', edad: 30},
        {nombres: 'Sara', edad: 22},
    ];
    
    let nombre_elimar='Daniel';
    personas =personas.fliter(
        personas=>personas.nombres !== nombre_elimar);
        console.log(personas);
}
eliminar_personas()
/*/
function eliminar_personas(nombre_eliminar) {
    let personas = [
        { nombres: 'ana', edad: 25 },
        { nombres: 'Daniel', edad: 30 },
        { nombres: 'Sara', edad: 22 },
    ];
    
    let personas_filtradas = []; // Arreglo para almacenar personas que no serán eliminadas

    personas.forEach(persona => {
        if (persona.nombres.toLowerCase() !== nombre_eliminar.toLowerCase()) { // Compara ignorando mayúsculas
            personas_filtradas.push(persona); // Agrega personas que no coinciden con el nombre a eliminar
        }
    });

    return personas_filtradas;
}

function eliminarYMostrarPersonas() {
    // Obtiene el nombre a eliminar ingresado en el formulario
    let nombre_eliminar = document.getElementById('nombre').value;

    // Llama a la función para eliminar la persona
    let personasActualizadas = eliminar_personas(nombre_eliminar);

    // Muestra el resultado en el DOM
    let resultadoElemento = document.getElementById('resultado');
    if (personasActualizadas.length < 3) { // Si hubo alguna eliminación
        resultadoElemento.textContent = `Personas restantes: ${JSON.stringify(personasActualizadas)}`;
    } else {
        resultadoElemento.textContent = "La persona no se encontró para eliminar.";
    }
}

