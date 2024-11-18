/*/
let filtrar_MayoresDeEdad = () => {
    let personas = [
        { nombre: 'Saray', edad: 25 },
        { nombre: 'Fernanda', edad: 17 },
        { nombre: 'Marta', edad: 32 },
        { nombre: 'Wes', edad: 19 }
    ];
    let mayoresDeEdad = personas.filter(persona => persona.edad > 17);
    console.log(mayoresDeEdad);
}

filtrar_MayoresDeEdad();
/*/
function filtrar_MayoresDeEdad() {
    let personas = [
        { nombre: 'Saray', edad: 25 },
        { nombre: 'Fernanda', edad: 17 },
        { nombre: 'Marta', edad: 32 },
        { nombre: 'Wes', edad: 19 }
    ];
    
    let mayoresDeEdad = []; // Arreglo para almacenar las personas mayores de edad

    personas.forEach(persona => {
        if (persona.edad > 17) { // Verifica si la persona es mayor de edad
            mayoresDeEdad.push(persona); // Agrega la persona al arreglo si cumple la condición
        }
    });

    return mayoresDeEdad;
}

function filtrarYMostrarMayoresDeEdad() {
    // Obtiene el arreglo de personas mayores de edad
    let mayoresDeEdad = filtrar_MayoresDeEdad();

    // Obtiene el elemento de resultado en el DOM
    let resultadoElemento = document.getElementById('resultado');
    resultadoElemento.innerHTML = ""; // Limpia el contenido previo

    // Muestra cada persona mayor de edad en una lista
    mayoresDeEdad.forEach(persona => {
        let li = document.createElement("li");
        li.textContent = `Nombre: ${persona.nombre}, Edad: ${persona.edad}`;
        resultadoElemento.appendChild(li);
    });
}
