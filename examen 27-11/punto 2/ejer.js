
const users = [
    { nombre: 'Juan', edad: 30, email: 'juan@sisis.com' },
    { nombre: 'Ana', edad: 25, email: 'ana@nono.com' },
    { nombre: 'Luis', edad: 35, email: 'luis@talves.com' }
];


const tablaNombres = document.querySelector('table tbody');
tablaNombres.innerHTML = users.map(user => `
    <tr>
        <td>${user.nombre}</td>
        <td>${user.edad}</td>
        <td>${user.email}</td>
    </tr>
`).join('');
