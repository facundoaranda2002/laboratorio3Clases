var nombre = "lalal";
var edad = 2;

var persona = 
{
    nombre:"Juan",
    edad:30,
    saludar: function()
    {
        console.log("Hola");
        console.log(this);
    },
    presentarse()
    {
        console.log(`Hola me llamo ${this.nombre} y tengo ${this.edad} años`);
        console.log(this);
    },
    presentarseArrow: ()=>
    {
        console.log(`Hola me llamo ${this.nombre} y tengo ${this.edad} años`);
        console.log(this);
    },
    despedir: ()=>
    {
        console.log("Chau");
        console.log(this);
    }
}

/*
console.log(persona.nombre);
persona.saludar();
persona.presentarse();
persona.despedir();
*/

console.log(persona);

persona.localidad = "Avellaneda";//le estamos agregando una variable por fuera del scope, en lenguajes de clases esto no se puede hacer porq esto lo agrega en tiempo de ejecucion

console.log(persona);

persona.sexo = "Masculino";

console.log(persona);


