function saludar()
{
    alert("hola que tal");
}

// load //se lanza cuando estan todos los recursos cargados
// DOMContentLoad //se lanza el evento cuando se renderizo la pagina, estan todos los nodos(todo lo que se crea a partir del index.html), pero faltan los multimedia

window.addEventListener("DOMContentLoaded", ()=>{
    document.getElementById("btnSaludo").addEventListener("click", ()=>{
        console.log("Hola");
    });
});

/* Otra forma, lo hago a traves de una propiedad, sin embargo no existe para el dom, solo para el load
window.onload = function () {
    console.log("Cargo la pagina");
}
*/

//document.getElementById("btnSaludo").addEventListener("click", saludar);
/* Otra forma de hacerlo
const botonSaludar = document.getElementById("btnSaludo");

botonSaludar.addEventListener("click", saludar);
*/
