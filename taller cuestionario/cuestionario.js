let listarCuestionario = document.querySelector("#cuestionario");

fetch("https://raw.githubusercontent.com/cesarmcuellar/CuestionarioWeb/refs/heads/main/cuestionario.json")
    .then(respuesta => respuesta.json())
    .then(datos => {
        let preguntasMultiples = datos.multiple_choice_questions;
        preguntasMultiples.forEach((pregunta, index) => {
            let item = document.createElement("div");
            item.classList.add("pregunta");

            // Titulo de la pregunta
            let preguntaTexto = document.createElement("p");
            preguntaTexto.innerHTML = `<strong>${pregunta.question}</strong>`;
            item.appendChild(preguntaTexto);

            // Opciones de respuesta
            pregunta.options.forEach(opcion => {
                let opcionItem = document.createElement("label");
                let inputRadio = document.createElement("input");
                inputRadio.type = "radio";
                inputRadio.name = `pregunta-${index}`;
                inputRadio.value = opcion;
                opcionItem.appendChild(inputRadio);
                opcionItem.appendChild(document.createTextNode(opcion));
                item.appendChild(opcionItem);
            });

            listarCuestionario.appendChild(item);
        });

        let preguntasVerdaderoFalso = datos.true_false_questions;
        preguntasVerdaderoFalso.forEach((pregunta, index) => {
            let item = document.createElement("div");
            item.classList.add("pregunta");

            let preguntaTexto = document.createElement("p");
            preguntaTexto.innerHTML = `<strong>${pregunta.question}</strong>`;
            item.appendChild(preguntaTexto);

            ["true", "false"].forEach(opcion => {
                let opcionItem = document.createElement("label");
                let inputRadio = document.createElement("input");
                inputRadio.type = "radio";
                inputRadio.name = `pregunta-${index}`;
                inputRadio.value = opcion;
                opcionItem.appendChild(inputRadio);
                opcionItem.appendChild(document.createTextNode(opcion.charAt(0).toUpperCase() + opcion.slice(1)));
                item.appendChild(opcionItem);
            });

            listarCuestionario.appendChild(item);
        });
    })
    .catch(error => {
        console.error("Error durante la carga del cuestionario:", error);
        let errorMsg = document.createElement("p");
        errorMsg.textContent = "Hubo un problema al cargar el cuestionario. Inténtalo de nuevo más tarde.";
        listarCuestionario.appendChild(errorMsg);
    });
let btnResultados = document.querySelector("#verResultados");
btnResultados.addEventListener("click", function() {
    let respuestas = [];
    let todasLasPreguntas = document.querySelectorAll(".pregunta");
    todasLasPreguntas.forEach((pregunta, index) => {
        let seleccionada = pregunta.querySelector('input[type="radio"]:checked');
        if (seleccionada) {
            respuestas.push({
                pregunta: pregunta.querySelector("strong").textContent,
                respuesta: seleccionada.value
            });
        }
    });

    let resultadosDiv = document.querySelector("#resultados");
    resultadosDiv.innerHTML = "<h1>Resultados:</h1>";

    respuestas.forEach(respuesta => {
        let resultadoItem = document.createElement("p");
        resultadoItem.innerHTML = `${respuesta.pregunta} - Respuesta seleccionada: ${respuesta.respuesta}`;
        resultadosDiv.appendChild(resultadoItem);
    });
});



