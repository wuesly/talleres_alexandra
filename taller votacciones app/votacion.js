let listarComentario = document.querySelector("#votacion");

fetch("https://raw.githubusercontent.com/cesarmcuellar/Elecciones/refs/heads/main/candidatos.json")
  .then(respuesta => respuesta.json())
  .then(datos => {
    datos.forEach(dato => {
      dato.votos = 0; 
    });

    console.log(datos);
    datos.forEach(dato => {
      let item = document.createElement("li");
      item.innerHTML = `
        <img src="${dato.foto}"></img>
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
// este js de login
const validarAdmin = (accion) => {
  let user = document.querySelector('#usuario').value;
  let contra = document.querySelector('#contraseña').value;

  fetch("https://raw.githubusercontent.com/cesarmcuellar/Elecciones/refs/heads/main/administrador.json")
      .then(respuesta => respuesta.json())
      .then(usuarios => {
          let admin = usuarios.username;
          let pass = usuarios.password;
          if (user === admin && contra === pass) {
              alert(`Elecciones ${accion} exitosamente`);
          } else {
              alert("Usuario o contraseña incorrectos");
          }
      })
      .catch(error => {
          console.error("Error al consumir la API:", error);
          alert("No se pudo verificar el usuario, intente nuevamente.");
      });
};

document.querySelector('#abrir').addEventListener('click', () => {
  validarAdmin("abiertas");
});

document.querySelector('#cerrar').addEventListener('click', () => {
  validarAdmin("cerradas");
});