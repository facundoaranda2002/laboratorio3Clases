class Animal
{
    constructor(tipo, edad, sexo, patas = 2)
    {
        this.tipo = tipo;
        this.edad = edad;
        this.sexo = sexo;
        this.patas = patas;
    }

    set Patas(value)
    {
        this.patas = value;
    }

    get Patas()
    {
        return this.patas;
    }

    sonar(sonido)
    {
        console.log("Hago " +  sonido);
    }

    presentarse()
    {
        return `Soy Animal de tipo ${this.tipo}, tengo ${this.edad} años y soy ${this.sexo}`;
    }

    static vivo = false;
}

class Mascota extends Animal //herencia
{
    constructor(nombre, tipo, edad, sexo, vacuna = false)
    {
        super(tipo, edad, sexo);
        this.nombre = nombre;
        this.vacuna = vacuna;
    }

    jugar()
    {
        console.log("Soy feliz jugando con mi dueño");
    }

    presentarse()
    {
        return (super.presentarse().replace("Animal", "Mascota") + ` y ${this.vacuna?"Estoy vacunado":"No estoy vacunado"}`);
    }
}

const animal = new Animal("Vaca", 5, "Hembra");
const mascota = new Mascota("Manuelita", "Tortuga", 56, "Hembra", true);


console.log(animal);
console.log(mascota);


console.log(animal.presentarse());

console.log(mascota.presentarse());


/*
console.log(animal.Patas);
animal.patas = 8;
console.log(animal);
console.log(animal.Patas);

console.log(Animal.vivo);
*/