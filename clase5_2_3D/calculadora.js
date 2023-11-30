
export default function sumar(a, b)//quiero sumar numeros //puedo exportar uno solo por default, abajo del todo tendria que sacarlo de los {}
{
    if(typeof a == "number" && typeof b == "number")//typeof es un operador unario, no una funcion, al menos en js. Por eso pongo == porq el resultado de typeof a tiene que ser number
    {
        return a + b;
    }
    return NaN;//el NaN seria como un null pero de tipo number, osea el typeof de NaN es number, null esta asociado con referencias, por eso no se usa en este caso
}//en js esta bien visto que hayan varios return en una funcion

export let restar = function(a, b)//no puedo hacer export default con el let debido al hosting, tendria que hacerlo en la ultima linea
{
    return a - b;
}

export function multiplicar(a, b)
{
    return a * b;
}

export function dividir(a, b)
{
    return validarCero(b)?NaN:a/b; //operador ternario, pregunto lo primero y si me devuelve true va a retornar lo de la izquierda del : y si devuelve false lo de la derecha
}

function validarCero(x)
{
    return x === 0;
}

//export {sumar, restar, multiplicar, dividir}; si no quiero escribir el export en cada funcion puedo hacerlo asi tmb
//export default restar