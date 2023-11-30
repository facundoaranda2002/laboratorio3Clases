
document.getElementById("btnGetPersonas").addEventListener("click", ()=>{
    getPersonas();
});

document.getElementById("btnGetPersona").addEventListener("click", ()=>{
    getPersona(2);
});

document.getElementById("btnPostPersona").addEventListener("click", ()=>{
    postPersona();
});

document.getElementById("btnDeletePersona").addEventListener("click", ()=>{
    deletePersona(2);
});

document.getElementById("btnUpdatePersona").addEventListener("click", ()=>{
    updatePersona();
});

const loader = document.querySelector("#loader");

const URL = "http://localhost:3000/personas";

function getPersonas()
{
    const xhr = new XMLHttpRequest();

    loader.classList.remove("oculto");//para mostrar el fantasmita(gif de tiempo de carga)

    // setear el evento ready state change
    /* Otra forma de hacer lo de abajo, como hicimos arriba con el addeventlistener
    xhr.addEventListener("readystatechange", ()=>{

    });
    */
   xhr.onreadystatechange = ()=>{
        if(xhr.readyState == 4)//el 4 es el unico que vamos a usar porq es el que te dice si se ejecuto todo o no
        {
            if(xhr.status >= 200 && xhr.status < 300)//lo que se toma en cuenta aca con los server status(los del http cat) y que este entre estos valores quiere decir que la ejecucionj salio todo bien
            {
                const data = JSON.parse(xhr.responseText);  
                console.log(data); 
            } 
            else
            {
                console.error(`Error ${xhr.status}: ${xhr.statusText}`);
            } 
            loader.classList.add("oculto");//oculto devuelta el tiempo de carga(el fantasmita)  
        }
    };

    // open peticion, se configura
    xhr.open("GET", URL, true);//si no pongo nada en el tercer parametro o pongo true le indico que la funcion sea asincrona


    //enviar
    try
    {
        xhr.send();//en las peticiones get no envio nada dentro porq la data va a ir en la url de la peticion
    }
    catch(err)//algo que fallo en mi pag web
    {
        console.error(err);
    }
}

function getPersona(id)
{
    const xhr = new XMLHttpRequest();

    loader.classList.remove("oculto");//para mostrar el fantasmita(gif de tiempo de carga)

    // setear el evento ready state change
    /* Otra forma de hacer lo de abajo, como hicimos arriba con el addeventlistener
    xhr.addEventListener("readystatechange", ()=>{

    });
    */
   xhr.onreadystatechange = ()=>{
        if(xhr.readyState == 4)//el 4 es el unico que vamos a usar porq es el que te dice si se ejecuto todo o no
        {
            if(xhr.status >= 200 && xhr.status < 300)//lo que se toma en cuenta aca con los server status(los del http cat) y que este entre estos valores quiere decir que la ejecucionj salio todo bien
            {
                const data = JSON.parse(xhr.responseText);  
                console.log(data); 
            } 
            else
            {
                console.error(`Error ${xhr.status}: ${xhr.statusText}`);
            } 
            loader.classList.add("oculto");//oculto devuelta el tiempo de carga(el fantasmita)  
        }
    };

    // open peticion, se configura
    xhr.open("GET", URL + `/${id}`, true);//si no pongo nada en el tercer parametro o pongo true le indico que la funcion sea asincrona


    //enviar
    try
    {
        xhr.send();//en las peticiones get no envio nada dentro porq la data va a ir en la url de la peticion
    }
    catch(err)//algo que fallo en mi pag web
    {
        console.error(err);
    }
}

function postPersona()
{
    new_persona = {
        nombre: "Juan",
        apellido: "Perez",
        edad: 30,
    };

    const xhr = new XMLHttpRequest();

    loader.classList.remove("oculto");//para mostrar el fantasmita(gif de tiempo de carga)

    // setear el evento ready state change
    /* Otra forma de hacer lo de abajo, como hicimos arriba con el addeventlistener
    xhr.addEventListener("readystatechange", ()=>{

    });
    */
   xhr.onreadystatechange = ()=>{
        if(xhr.readyState == 4)//el 4 es el unico que vamos a usar porq es el que te dice si se ejecuto todo o no
        {
            if(xhr.status >= 200 && xhr.status < 300)//lo que se toma en cuenta aca con los server status(los del http cat) y que este entre estos valores quiere decir que la ejecucionj salio todo bien
            {
                const data = JSON.parse(xhr.responseText);  
                console.log(data); 
            } 
            else
            {
                console.error(`Error ${xhr.status}: ${xhr.statusText}`);
            } 
            loader.classList.add("oculto");//oculto devuelta el tiempo de carga(el fantasmita)  
        }
    };


    // open peticion, se configura
    xhr.open("POST", URL, true);//si no pongo nada en el tercer parametro o pongo true le indico que la funcion sea asincrona

    //seteo la cabecera
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    //enviar
    try
    {
        xhr.send(JSON.stringify(new_persona));//en las peticiones post si que envio algo adentro 
    }
    catch(err)//algo que fallo en mi pag web
    {
        console.error(err);
    }
}

function deletePersona(id)
{
    const xhr = new XMLHttpRequest();

    loader.classList.remove("oculto");//para mostrar el fantasmita(gif de tiempo de carga)

    // setear el evento ready state change
    /* Otra forma de hacer lo de abajo, como hicimos arriba con el addeventlistener
    xhr.addEventListener("readystatechange", ()=>{

    });
    */
   xhr.onreadystatechange = ()=>{
        if(xhr.readyState == 4)//el 4 es el unico que vamos a usar porq es el que te dice si se ejecuto todo o no
        {
            if(xhr.status >= 200 && xhr.status < 300)//lo que se toma en cuenta aca con los server status(los del http cat) y que este entre estos valores quiere decir que la ejecucionj salio todo bien
            {
                const data = JSON.parse(xhr.responseText);  
                console.log(data); 
            } 
            else
            {
                console.error(`Error ${xhr.status}: ${xhr.statusText}`);
            } 
            loader.classList.add("oculto");//oculto devuelta el tiempo de carga(el fantasmita)  
        }
    };

    // open peticion, se configura
    xhr.open("DELETE", URL + `/${id}`, true);//si no pongo nada en el tercer parametro o pongo true le indico que la funcion sea asincrona


    //enviar
    try
    {
        xhr.send();//en las peticiones get no envio nada dentro porq la data va a ir en la url de la peticion
    }
    catch(err)//algo que fallo en mi pag web
    {
        console.error(err);
    }
}

function updatePersona()
{
    updatedPersona = {
        id: 18,
        nombre: "Darb",
        apellido: "Perez",
        edad: 40,
    };

    const xhr = new XMLHttpRequest();

    loader.classList.remove("oculto");//para mostrar el fantasmita(gif de tiempo de carga)

    // setear el evento ready state change
    /* Otra forma de hacer lo de abajo, como hicimos arriba con el addeventlistener
    xhr.addEventListener("readystatechange", ()=>{

    });
    */
   xhr.onreadystatechange = ()=>{
        if(xhr.readyState == 4)//el 4 es el unico que vamos a usar porq es el que te dice si se ejecuto todo o no
        {
            if(xhr.status >= 200 && xhr.status < 300)//lo que se toma en cuenta aca con los server status(los del http cat) y que este entre estos valores quiere decir que la ejecucionj salio todo bien
            {
                const data = JSON.parse(xhr.responseText);  
                console.log(data); 
            } 
            else
            {
                console.error(`Error ${xhr.status}: ${xhr.statusText}`);
            } 
            loader.classList.add("oculto");//oculto devuelta el tiempo de carga(el fantasmita)  
        }
    };


    // open peticion, se configura
    xhr.open("PUT", URL + "/"+ updatedPersona.id, true);//si no pongo nada en el tercer parametro o pongo true le indico que la funcion sea asincrona

    //seteo la cabecera
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    //enviar
    try
    {
        xhr.send(JSON.stringify(updatedPersona));//en las peticiones post si que envio algo adentro 
    }
    catch(err)//algo que fallo en mi pag web
    {
        console.error(err);
    }
}


/*PATCH solo cambia los elementos que paso
function updatePersona()
{
    updatedPersona = {
        id: 18,
        nombre: "Juan Pablo",
    };

    const xhr = new XMLHttpRequest();

    loader.classList.remove("oculto");

   xhr.onreadystatechange = ()=>{
        if(xhr.readyState == 4)
        {
            if(xhr.status >= 200 && xhr.status < 300)
            {
                const data = JSON.parse(xhr.responseText);  
                console.log(data); 
            } 
            else
            {
                console.error(`Error ${xhr.status}: ${xhr.statusText}`);
            } 
            loader.classList.add("oculto");
        }
    };


   
    xhr.open("PATCH", URL + "/"+ updatedPersona.id, true);


    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");


    try
    {
        xhr.send(JSON.stringify(updatedPersona));
    }
    catch(err)
    {
        console.error(err);
    }
}
*/