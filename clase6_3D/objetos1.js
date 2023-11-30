/**
 *  Objetos
 * Los podemos crear de esta manera:
 * - objeto literal
 * - constructor
 * - Object*
 */

/*
const obj1 = {};
const obj2 = new Object();
const obj3 = Object.create({});//seria como una clase estatica

const obj4 = new Object(5);
const x = 5;

const obj5 = new Object("cadena");
const estring = String("hola");
const obj6 = new Object(true);
const y = [];


console.log(obj1);
console.log(obj2);
console.log(obj3);
console.log(obj4);
console.log(obj5);
console.log(x);
console.log(estring);
console.log(obj6);
console.log(y);

console.log(typeof obj1);
console.log(typeof true);
*/

const objeto = 
{
    numero: 3,
//  "numero": 34,//como es la misma key sobreescribiria el numero anterior
    cadena: "Hola",
    booleano: false,
//  "array": [3, 5, 8, 1],
    array: [3, 5, 8, 1],
    otroObjeto: {},
//  "":"algo",
//  "23":[7, 6, "Algo"],
};

/*
// acceder a un atributo:
// operador punto
// nomenclatura de corchetes

console.log(objeto.numero);
console.log(objeto["numero"]);
console.log(objeto[""]);//no podria acceder a estos elementos mediante el operador punto
console.log(objeto["23"]);//no podria acceder a estos elementos mediante el operador punto
*/

//let atributo = "cadena";
//console.log(objeto[atributo]);

const entradas = Object.entries(objeto);
const valores = Object.values(objeto);
const claves = Object.keys(objeto);

console.log(entradas);
console.log(valores);
console.log(claves);

/*
let x = 20;
let y = 30;

let contador = 0;

console.log(`${contador || "No hay datos"}`);
*/

for(let i = 0; i < entradas.length; i++)
{
    //console.log(`${ x > y?"Hola":"Chau"}`);
    /*
    acento inverso(back stick), cuando ponemos una cadena con esto nos permite meter codigo de 
    js adentro, seria como un operador ternario, nos sirve para concatenar sin tener que usar el +
    */
    //console.log(`${entradas[i][0]} : ${entradas[i][1]}`);//hace lo mismo que abajo
    let [clave, valor] = entradas[i];
    console.log(`${clave} : ${valor}`);
}

console.log("------------------------FOR IN-------------------------");

for (const i in claves)//hace lo mismo que arriba
{
    console.log(`${claves[i]}: ${objeto[claves[i]]}`);
}

console.log("-----------------------FOR EACH--------------------------");

claves.forEach((clave)=>
{
    //console.log(clave);
    console.log(`${clave}: ${objeto[clave]}`);
})





