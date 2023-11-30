
document.getElementById("btnGetPersonas").addEventListener("click", ()=>{
    getPersonas();
});

document.getElementById("btnGetPersona").addEventListener("click", ()=>{
    getPersona(4);
});

document.getElementById("btnPostPersona").addEventListener("click", ()=>{
    postPersona();
});

document.getElementById("btnDeletePersona").addEventListener("click", ()=>{
    deletePersona(1);
});

document.getElementById("btnUpdatePersona").addEventListener("click", ()=>{
    updatePersona();
});

const loader = document.querySelector("#loader");

const URL = "http://localhost:3000/personas";


// function getPersonas()
// {
//     loader.classList.remove("oculto");

//     //Como no aclaro nada en fetch la peticion es get
//     fetch(URL)//nos devuelve una promesa, en lugar de trabajar con callbacks trabajamos con promesas
//     .then((res)=>{
//         //la respuesta de fetch tiene un metodo json que devuelve una promesa con el body ya parseado
//         /* esto de abajo puedo hacerlo con un operador ternario como abajo
//         if(res.ok == true)
//         {
//             return res.json();
//         }
//         else
//         {
//             return Promise.reject(res);
//         }
//         */
//        return res.ok ? res.json():Promise.reject(res);
//     })
//     .then((data)=>{//este then es como un if else del then de arriba
//         console.log(data);
//     })
//     .catch((res)=>{
//         console.error(`Error ${res.status}: ${res.statusText}`);
//     })
//     .finally(()=>{
//         loader.classList.add("oculto");
//     })
// }

//si quiero hacer lo de arriba con funcion asincrona
const getPersonas = async()=>{
    loader.classList.remove("oculto");
    try
    {
        const res = await fetch(URL);
        if(!res.ok)
        {
            throw res;
        }
        const data = await res.json();
        console.log(data);
    }
    catch(res)
    {
        console.error(`Error ${res.status}: ${res.statusText}`);
    }
    finally
    {
        loader.classList.add("oculto");
    }
}

async function getPersona(id)
{
    loader.classList.remove("oculto");
    try
    {
        const res = await fetch(URL + "/" + id);
        if(!res.ok)
        {
            throw res;
        }
        const data = await res.json();
        console.log(data);
    }
    catch(res)
    {
        console.error(`Error ${res.status}: ${res.statusText}`);
    }
    finally
    {
        loader.classList.add("oculto");
    }
}

function postPersona()
{
    new_persona = {
        nombre: "Lucia",
        apellido: "Garcia",
        edad: 25,
    };

    loader.classList.remove("oculto");

    fetch(URL, {
        method:"POST",
        headers:{
            "Content-Type": "application/json;charset=UTF-8",
        },
        body: JSON.stringify(new_persona),
    })
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((data) => console.log(data))
    .catch((res) => console.error(`Error ${res.status}: ${res.statusText}`))
    .finally(()=> loader.classList.add("oculto"));
}

function deletePersona(id)
{
    loader.classList.remove("oculto");

    fetch(URL + "/" + id, {
        method:"DELETE",
    })
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((data) => console.log(data))
    .catch((res) => console.error(`Error ${res.status}: ${res.statusText}`))
    .finally(()=> loader.classList.add("oculto"));
}

function updatePersona()
{
    updatedPersona = {
        id: 22,
        nombre: "Luciana",
        apellido: "Garcia",
        edad: 25,
    };

    loader.classList.remove("oculto");

    fetch(URL + "/" + updatedPersona.id, {
        method:"PUT",
        headers:{
            "Content-Type": "application/json;charset=UTF-8",
        },
        body: JSON.stringify(updatedPersona),
    })
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((data) => console.log(data))
    .catch((res) => console.error(`Error ${res.status}: ${res.statusText}`))
    .finally(()=> loader.classList.add("oculto"));
}