
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(respuesta => respuesta.json()) 
    .then(datos => {

        datos.forEach(post => {
            const li = document.createElement("li");
            li.textContent = post.title;  
            document.querySelector("#lista-posts").appendChild(li);  
        });
    })
    .catch(error => {
        console.error("Hubo un problema al obtener los posts:", error);
    });
