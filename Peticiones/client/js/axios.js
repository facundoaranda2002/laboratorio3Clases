
document.getElementById("btnGetPersonas").addEventListener("click", ()=>{
    getPersonas();
});

document.getElementById("btnGetPersona").addEventListener("click", ()=>{
    getPersona(6);
});

document.getElementById("btnPostPersona").addEventListener("click", ()=>{
    postPersona();
});

document.getElementById("btnDeletePersona").addEventListener("click", ()=>{
    deletePersona(17);
});

document.getElementById("btnUpdatePersona").addEventListener("click", ()=>{
    updatePersona();
});

const loader = document.querySelector("#loader");

const URL = "http://localhost:3000/personas";

function getPersonas()
{
    loader.classList.remove("oculto");
    axios.get(URL)//devuelve una promesa
    .then(({data})=>{
        console.log(data);
    })
    .catch(({message})=>{
        console.error(message);
    })
    .finally(()=>{
        loader.classList.add("oculto");
    });
}

function getPersona(id)
{
    loader.classList.remove("oculto");
    axios.get(URL + "/" + id)//devuelve una promesa
    .then(({data})=>{
        console.log(data);
    })
    .catch(({message})=>{
        console.error(message);
    })
    .finally(()=>{
        loader.classList.add("oculto");
    });
}

function postPersona()
{
    new_persona = {
        nombre: "Pedro",
        apellido: "Lopez",
        edad: 29,
    };

    loader.classList.remove("oculto");
    axios.post(URL, new_persona)
    .then(({data})=>{
        console.log(data);
    })
    .catch(({message})=>{
        console.error(message);
    })
    .finally(()=>{
        loader.classList.add("oculto");
    });
}

function deletePersona(id)
{
    loader.classList.remove("oculto");
    axios.delete(URL + "/" + id)//devuelve una promesa
    .then(({data})=>{
        console.log(data);
    })
    .catch(({message})=>{
        console.error(message);
    })
    .finally(()=>{
        loader.classList.add("oculto");
    });
}

function updatePersona()
{
    updatedPersona = {
        id: 23,
        nombre: "Manuel",
        apellido: "Lopez",
        edad: 29,
    };

    loader.classList.remove("oculto");

    axios.put(URL + "/" + updatedPersona.id, updatedPersona)//devuelve una promesa
    .then(({data})=>{
        console.log(data);
    })
    .catch(({message})=>{
        console.error(message);
    })
    .finally(()=>{
        loader.classList.add("oculto");
    });
}