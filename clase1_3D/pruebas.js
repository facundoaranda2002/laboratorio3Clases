
function saludar()
{
    console.log("Hola mundo");
}

/* Esto es una funcion autoinvocada y funciona
(function saludar()
{
    console.log("Hola mundo");
})()
*/

saludar();

var pepe = saludar;//estoy haciendo que pepe apunte al mismo lugar que apunta saludar, los 2 van a poder llamar a la funcion
pepe();

//funcion nombrada
function x(pepe)//como argumento de la funcion se llama pepe pero como parametro que le paso al llamar la funcion se llama saludar, entonces le estoy pasando el saludar, no el pepe. El valor del parametro actual se copia al parametro formal
{
    pepe();
}
x(saludar);//lo que hice aca es lo mismo que hice arriba con el pepe = saludar. Seria un delegado ya que le estoy delegando a la funcion x la funcion saludar. En js esto es un callback. La funcion saludar es la callback, no la x.

x(function saludar()
{
    console.log("Hola mundo");
});//estoy pasando un literal de funcion, seria como que pase un literal de entero en una funcion tipo sumar(4, 5);
//osea que esto se va a guardar literalmente en pepe, por lo que va a funcionar normalemente, me va a decir hola mundo

//funcion expresada
var jaimito = function()
{
    console.log("Hola mundo");
}

jaimito();

//hoisting
console.log(y);//en cualquier lenguaje me diria que y no esta definido y me tiraria un error pero solo me sale undefined, no me da error ya que le pega una leida al codigo y "sube para arriba" lo de abajo, es decir, sabe que la variable existe

var y = 20;//var ya no se usa para cosas desde cero pero si que es parte de programas viejos por lo que nos lo podemos encontrar

//arrow function
function sumar(a, b)
{
    return a + b;
}

let sumar = function(a, b)
{
    return a + b;
}

//Esta es una arrow function que hace lo mismo que arriba
let sumar = (a, b)=>{return a + b};//let sumar = (a, b)=>a + b; esto es un return implicito

//Callback

//setTimeout(funcion, tiempo en milisegundos); 
setTimeout(saludar, 3000);// va a ejecutar el saludar despues de esperar 3 segundos



