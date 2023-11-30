/**
 * En js las funciones son ciudadanos de primera clase
 * 
 * porque se las puede tratar como a cualquier valor
 * 
 * - se pueden asignar a una variable
 * - se pueden pasar como argumentos a otras funciones
 * - pueden ser retornadas por una funcion 
 */

const sumar = function(a, b)
{
    return a + b;
}
console.log(sumar(4, 5)); //9

function ejecutora(callback, num1, num2)
{
    console.log(callback(num1, num2));
}
ejecutora(sumar, 45, 35);
ejecutora(function (a, b){return a - b; }, 45, 35);

function crearSumador(valor)
{
    let valorClosure = 10;
    return function(numero)
    {
        return numero + valor + valorClosure;
    };
}
const sumarCinco = crearSumador(5);
console.log(sumarCinco(7)); //12

console.log(crearSumador);

function funcionContadora()
{
    let contador = 0;
    return function()
    {
        return contador++;
    };
}
const contador_clicks = funcionContadora();//seria como una especie de getter en este caso

console.log(contador_clicks());
console.log(contador_clicks());
console.log(contador_clicks());
console.log(contador_clicks());
