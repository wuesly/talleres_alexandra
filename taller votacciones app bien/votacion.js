let listarComentario = document.querySelector("#votacion");

fetch("https://raw.githubusercontent.com/cesarmcuellar/Elecciones/refs/heads/main/candidatos.json")
    .then(respuesta => respuesta.json())
    .then(datos => {
        datos.forEach(dato => {
            dato.votos = 0;
        });

        datos.forEach(dato => {
            let item = document.createElement("li");
            item.innerHTML = `
                <img src="${dato.foto}" alt="Foto de ${dato.nombre}">
                <p>${dato.nombre}</p>
                <p>${dato.apellido}</p>
                <p>${dato.ficha}</p>
                <p>${dato.curso}</p>
            `;
            let img = item.querySelector("img");
            img.addEventListener("click", () => {
                let confirmar = confirm(`¿Estás seguro de votar por ${dato.nombre} ${dato.apellido}?`);
                if (confirmar) {
                    registrarVoto(dato);
                    alert("¡Voto registrado con éxito!");
                }
            });

            listarComentario.appendChild(item);
        });

        function registrarVoto(candidato) {
            candidato.votos++;
            console.log(`Voto registrado para: ${candidato.nombre} ${candidato.apellido}`);
        }

        function mostrarResultados() {
            let resultadosDiv = document.querySelector("#resultados");
            resultadosDiv.innerHTML = "<h1>Resultados de la votación:</h1>";

            datos.forEach(dato => {
                let resultadoItem = document.createElement("p");
                resultadoItem.innerHTML = `${dato.nombre} ${dato.apellido}: ${dato.votos} votos`;
                resultadosDiv.appendChild(resultadoItem);
            });
        }

        let btnResultados = document.querySelector("#verResultados");
        btnResultados.addEventListener("click", mostrarResultados);
    });
