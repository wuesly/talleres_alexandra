/*/
let buscar_personas =( )=> {
    let personas=[
        {nombres: 'ana', edad: 25},
        {nombres: 'Daniel', edad: 30},
        {nombres: 'Sara', edad: 22},
    ];
     
    let nobre_buscar='Daniel';
    let personas_encontar = personas.find(
        personas => personas.nombres=== nobre_buscar);
         console.log(personas_encontar);
    
}
buscar_personas()
/*/
function buscar_personas(nombre_buscar) {
    let personas = [
        { nombres: 'ana', edad: 25 },
        { nombres: 'Daniel', edad: 30 },
        { nombres: 'Sara', edad: 22 },
    ];
    
    let persona_encontrada = null; // Variable para almacenar la persona encontrada

    personas.forEach(persona => {
        if (persona.nombres.toLowerCase() === nombre_buscar.toLowerCase()) { // Compara nombres en minúsculas
            persona_encontrada = persona; // Asigna la persona encontrada
        }
    });

    return persona_encontrada;
}

function buscarYMostrarPersona() {
    // Obtiene el valor ingresado en el formulario
    let nombre_buscar = document.getElementById('nombre').value;

    // Llama a la función para buscar la persona
    let persona = buscar_personas(nombre_buscar);

    // Muestra el resultado en el DOM
    let resultadoElemento = document.getElementById('resultado');
    if (persona) {
        resultadoElemento.textContent = `Persona encontrada: Nombre: ${persona.nombres}, Edad: ${persona.edad}`;
    } else {
        resultadoElemento.textContent = "La persona no se encontró.";
    }
}

