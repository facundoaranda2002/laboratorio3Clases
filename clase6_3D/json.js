

let persona = 
{
    nombre: "Juan",
    apellido: "Perez",
    edad : 24,
};

let json = JSON.stringify(persona)//lo estoy llevando a cadena json, lo estoy stringifeando

let otraPersona = JSON.parse(json);//lo estoy volviendo a ocnvertir en objeto

console.log(persona);
console.log(otraPersona);
console.log(json);

console.log(typeof persona);
console.log(typeof otraPersona);
console.log(typeof json);

const mascotas = [];

if(JSON.parse(localStorage.getItem("mascotas")))
{
    //para ver como lo agrego aca al array de mascotas tengo el video de arrays
}

localStorage.setItem("juancito", JSON.stringify(persona));//guardo
//el local storage es donde se guarda la dat por mas de que apaguemos la compu o cerremos todo
//el juancito e sla key y el resto el valor, esto lo podmeos ver en apicacion - almacenamiento - almacenamiento local

const juan = JSON.parse(localStorage.getItem("juancito"));//recupero

console.log(juan);
