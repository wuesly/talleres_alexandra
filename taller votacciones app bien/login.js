// Función para validar administrador
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
                if (accion === "abiertas") {
                    document.querySelector("#login").style.display = "none";
                    document.querySelector("#votaciones").style.display = "block";
                }
            } else {
                alert("Usuario o contraseña incorrectos");
            }
        })
        .catch(error => {
            console.error("Error al consumir la API:", error);
            alert("No se pudo verificar el usuario, intente nuevamente.");
        });
};

// Eventos para los botones de abrir y cerrar elecciones
document.querySelector('#abrir').addEventListener('click', () => {
    validarAdmin("abiertas");
});

document.querySelector('#cerrar').addEventListener('click', () => {
    validarAdmin("cerradas");
});
