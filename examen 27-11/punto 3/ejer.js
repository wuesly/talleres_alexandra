const contenedor = document.getElementById('botones');

const botones = ['Botón 1', 'Botón 2', 'Botón 3', 'Botón 4', 'Botón 5'];

botones.forEach((texto, indice) => {
    const boton = document.createElement('button');
    boton.textContent = texto;
    boton.addEventListener('click', () => {
        console.log(`Clic en el ${texto}, índice: ${indice}`);
    });

    contenedor.appendChild(boton);
});
