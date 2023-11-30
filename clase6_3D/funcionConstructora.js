
/*
function Persona(nombre, edad, genero)
{
    const obj = {};//const porque no voy a cambiar la referencia del objeto en memoria nunca
    obj.nombre = nombre;
    obj.edad = edad;
    obj.genero = genero;

    obj.saludar= function()
    {
        console.log("Hola");
    };

    obj.presentarse= function()
    {
        console.log(`Hola me llamo ${this.nombre} y tengo ${this.edad} años`);
        console.log(this);
    };

    return obj;
}

const per1 = Persona("Juan", 20, "m");
const per2 = Persona("Lucia", 34, "f");

console.log(per1);
console.log(per2);
per1.presentarse();
per2.presentarse();
*/

//ESTA ES LA FORMA EN QUE LO VAMOS A HACER
function Persona(nombre, edad, genero, altura = 1.75)
{
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
    let _altura = altura;//con el let hago que desde afuera se trate como un atributo privado o protected
    //this._altura = altura;

    this.getAltura= function()
    {
        return _altura;
    }
    /*
    this.getAltura= function()
    {
        return this._altura;
    }
    */

    this.setAltura = function(value)
    {
        _altura = value;
    }
    /*
    this.setAltura = function(value)
    {
        this._altura = value;
    }
    */

    
    /* Estas funciones, como van a ser genericas, las voy a agregar y a desarrollar en el prototype
    this.saludar= function()
    {
        console.log("Hola");
    };

    this.presentarse= function()
    {
        console.log(`Hola me llamo ${this.nombre} y tengo ${this.edad} años`);
        console.log(this);
    };
    */
}

Persona.prototype.saludar = function()
{
    console.log("Hola");
};

Persona.prototype.presentarse = function()
{
    console.log(`Hola me llamo ${this.nombre} y tengo ${this.edad} años`);
    console.log(this);
};


//const per1 = new Persona("Juan", 20, "m");
//const per1 = new Persona.call({}, "Juan", 20, "m"); esto es lo que estariamos haciendo al aplicar el constructor que acabamos de hacer pero sin necesidad del call 
//const per1 = {};
//Persona.call(per1, Juan", 20, "m");

const per1 = new Persona("Juan", 20, "m", 1.50);
const per2 = new Persona("Lucia", 34, "f");

console.log(per1);
console.log(per2);
per1.presentarse();
per2.presentarse();

per2._altura = 3.21;

console.log(per2.getAltura());
console.log(per2._altura);

console.log(per1.getAltura());
