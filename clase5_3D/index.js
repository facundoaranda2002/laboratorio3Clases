
/* Otra forma de hacerlo
//con esto voy a evitar que se muestre la asignacion de variables del submit en la url
document.forms[0].addEventListener("submit", (e)=>{

    e.preventDefault();//con esto le estamos quitando el comportamiento por default al evento submit

    console.log("Evento submit");

})
*/
const formulario = document.forms[0];//la propiedad forms devuelve una lista de formularios y como tengo uno solo agarro el de la posicion 0

formulario.addEventListener("submit", (e)=>{//si en vez d ela arrow pongo function(e) me va sa salir lo mismo con this y con e.target, esto es debido a que la arrow tiene su propio scope
    
    e.preventDefault();

    console.log(this);//con esto muestro el objeto, e.target me dice quien fue el emisor, a este tambien se lo puede llamar con this pero esto arroja problemas con la arrow function
    console.log(e.target);
});