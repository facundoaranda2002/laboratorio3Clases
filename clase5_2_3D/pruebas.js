
(function()
{
    console.log("Hello");
})();

//IIFE(Immediately Invoked Function Expression) Funcion Inmediatamente Ejecutada

const persona = //literal de objeto
{
    nombre: "Juan",
    apellido: "Perez",
    edad: 30,
};

console.log(persona.nombre)

/* Esto se puede hacer en una sola linea como muetsro ahi abajo
let nombre = persona.nombre;
let apellido = persona.apellido;
let edad = persona.edad;
*/
let {nombre, apellido, edad} = persona //esto mismo es lo que hago con el import de calculadora, estoy agregando esas funciones al objeto que voy a exportar


console.log(nombre, apellido, edad);