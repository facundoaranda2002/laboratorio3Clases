//Esto no lo vamos a usar, es para explicar lo que terminamos haciendo en calculadora, capaz lo usamos pero para otra cosa

const calculadora=(function()//voy a usar esto para evitar el conflicto con la otra funcion sumar mediante la generacion de un scope, lo que estoy haciendo basicamente es un namespace como en C#
{
    function sumar(a, b)//quiero sumar numeros
    {
        if(typeof a == "number" && typeof b == "number")//typeof es un operador unario, no una funcion, al menos en js. Por eso pongo == porq el resultado de typeof a tiene que ser number
        {
            return a + b;
        }
        return NaN;//el NaN seria como un null pero de tipo number, osea el typeof de NaN es number, null esta asociado con referencias, por eso no se usa en este caso
    }//en js esta bien visto que hayan varios return en una funcion

    function restar(a, b)
    {
        return a - b;
    }

    function multiplicar(a, b)
    {
        return a * b;
    }

    function dividir(a, b)
    {
        return validarCero(b)?NaN:a/b; //operador ternario, pregunto lo primero y si me devuelve true va a retornar lo de la izquierda del : y si devuelve false lo de la derecha
    }

    function validarCero(x)
    {
        return x === 0;
    }

    return{
        sumar,//esto es una clave valor, si la key es igual al valor puedo hacer esto con las funciones
        restar,
        dividir,
        multiplicar,
    };//va a retornar los punteros a todas las funciones de arriba, devuelve un objeto
})();