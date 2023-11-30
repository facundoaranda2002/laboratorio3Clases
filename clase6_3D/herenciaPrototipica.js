

function Animal(tipo, edad, sexo)
{
    this.tipo = tipo;
    this.edad = edad;
    this.sexo = sexo;
}

Animal.prototype.sonar = function(sonido)
{
    console.log("Hago " +  sonido);
};

Animal.prototype.presentarse = function()
{
    return `Soy Animal de tipo ${this.tipo}, tengo ${this.edad} años y soy ${this.sexo}`;
};

function Mascota(nombre, tipo, edad, sexo, vacuna = false)//quiero heredar de animal
{
    Animal.call(this, tipo, edad, sexo);//no lo hacemos con el new porque estariamos creando un nuevo objeto y no queremos eso, queremos heredar no mas
    this.nombre = nombre;
    this.vacuna = vacuna;
}

Mascota.prototype.jugar = function()
{
    console.log("Soy feliz jugando con mi dueño");
};

//Aca abajo quiero hacer un override de presentarse en Mascota(el hijo de Animal)
Mascota.prototype.presentarse = function()
{
    //return "soy mascota"; aca retorno otra cosa distinta al presentarse del padre
    /* aca retorna una modificacion del presentarse del padre
    mensaje = Animal.prototype.presentarse.call(this);//aca estoy llamando al presentarse que esta mas arriba en la cadena prototipal
    return mensaje.replace("Animal", "Mascota");//la funcion replace es para reemplazar cosas en una cadena
    */
    return Animal.prototype.presentarse.call(this).replace("Animal", "Mascota") + ` y me dieron ${mascota.premio}`;
};

Object.setPrototypeOf(Mascota.prototype, Animal.prototype); //Con esto engancho el prototipo de Mascota con el de Animal(a la izquierda va el del hijo y a la derecha el del padre)

Mascota.prototype.premio = "regalito";

const animal = new Animal("Perro", 3, "Macho");
const mascota = new Mascota("Manuelita", "Tortuga", 56, "Hembra", true);

console.log(animal);
console.log(mascota);

console.log(animal.presentarse());
console.log(mascota.presentarse());