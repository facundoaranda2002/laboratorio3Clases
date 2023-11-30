//import {sumar, multiplicar} from "./calculadora";
import sumar, {multiplicar} from "./calculadora.js";//el que exporte por default lo saco del {} y puedo ponerle cualquier nombre
import{sumar as sumarCadenas} from "./cadenas.js";

console.log(sumar(3, 5));
console.log(sumarCadenas(3, 5));
console.log(calculadora.sumar(3, 5));
console.log(calculadora.multiplicar(3, 5));
