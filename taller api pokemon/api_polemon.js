fetch("https://pokeapi.co/api/v2/pokemon/ditto")
.then(respuesta=>respuesta.json())
.then(datos=>{
    document.querySelector("#imagen_pokemon").src = datos.sprites.front_default;
    document.querySelector("#nombre_pokemon").textContent=datos.name;
    document.querySelector("#numero_pokemon").textContent=datos.order;
    document.querySelector("#avilidad").textContent=datos.base_experience;
    });
fetch("https://pokeapi.co/api/v2/pokemon/charizard")
.then(respuesta=>respuesta.json())
.then(datos=>{
    document.querySelector("#imagen_pokemon2").src = datos.sprites.front_default;
    document.querySelector("#nombre_pokemon2").textContent=datos.name;
    document.querySelector("#numero_pokemon2").textContent=datos.order;
    document.querySelector("#avilidad2").textContent=datos.base_experience;
});