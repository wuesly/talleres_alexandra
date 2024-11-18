/*
const agregarPersona = () => {
    let personas = [
        { nombre: 'costansa', edad: 26 },
        { nombre: 'lilian', edad: 20 }
    ];
    let nuevaPersona = { nombre: 'Yelsit', edad: 27 };  
    personas.push(nuevaPersona);
    console.log(personas);
}
/*/

let personas = [
    { nombre: 'costansa', edad: 26 },
    { nombre: 'lilian', edad: 20 }
];

function agregarPersona(nombre, edad) {
    let nuevaPersona = { nombre: nombre, edad: parseInt(edad) };
    
    // Agregamos la nueva persona al arreglo de personas
    personas.push(nuevaPersona);

    return personas;
}

function agregarYMostrarPersona() {
    // Obtiene los valores ingresados en el formulario
    let nombre = document.getElementById('nombre').value;
    let edad = document.getElementById('edad').value;

    if (nombre && edad) { // Verifica que los campos no estén vacíos
        // Llama a la función para agregar la nueva persona
        let personasActualizadas = agregarPersona(nombre, edad);

        // Muestra la lista actualizada de personas en el DOM
        let listaElemento = document.getElementById('listaPersonas');
        listaElemento.innerHTML = ""; // Limpia el contenido previo

        personasActualizadas.forEach(persona => {
            let li = document.createElement("li");
            li.textContent = `Nombre: ${persona.nombre}, Edad: ${persona.edad}`;
            listaElemento.appendChild(li);
        });

        // Limpia los campos del formulario después de agregar
        document.getElementById('nombre').value = "";
        document.getElementById('edad').value = "";
    } else {
        alert("Por favor, ingresa un nombre y una edad.");
    }
}

