export const sumar = function(a, b)//quiero concatenar los numeros
{
    if(typeof a == "number")
    {
        return a.toString() + b;
    }
    return a + b;
}