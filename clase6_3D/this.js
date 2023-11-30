/*
var nombre = "Juan";

function miFuncion()
{
    console.log(this.nombre);
    console.log(this);
}

const persona = 
{
    nombre: "Jose",
    miFuncion: function()
    {
        console.log(this.nombre);
    }
}

miFuncion();

persona.miFuncion();

//son lo mismo
this.console.log("Hola");
window.console.log("Hola");
console.log("Hola");
*/

const persona = 
{
    nombre: "Jose",
    saludar: function()
    {
        console.log(this.nombre, this);
    }
};

const mascota = 
{
    nombre: "Colita",
};

const alumno = 
{
    nombre: "Miguel",
};

/*
persona.saludar();

const x = persona.saludar;

x();
*/

setTimeout(function()
{
    persona.saludar();
},3000);//esta es la manera de no tener que lidiar con el this, para evitar una poscible desreferenciacion

// call, apply, bind

const metodo = persona.saludar;//en este momento metodo tiene el scope del windows, el scope global

persona.saludar();
metodo();
metodo.call(persona);
metodo.call(mascota);
metodo.call(alumno);


