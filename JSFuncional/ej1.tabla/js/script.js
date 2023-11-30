let datos;
let divTabla = document.getElementById("divTabla");
let btnSexo = document.querySelector("#btnSexo");//otra forma de hacer lo de arriba
let btnMap = document.querySelector("#btnMap");

btnSexo.addEventListener("click", ()=>{
    refrescarDiv(divTabla, crearTabla(filtrarSexo(datos, "Female")));
});

btnMap.addEventListener("click", ()=>{
    refrescarDiv(divTabla, crearTabla(mapearMails(datos)));
});

let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200)
    {
        datos = JSON.parse(this.responseText);
        console.log(datos);
        refrescarDiv(divTabla, crearTabla(datos));
    }
};
xhr.open("get", "./js/data.json");
xhr.send();

function crearTabla(arr)
{
    let tabla = document.createElement("table");
    tabla.appendChild(crearCabeceraTabla(arr[0]));
    tabla.appendChild(crearCuerpoTabla(arr));

    tabla.classList.add("table");
    tabla.classList.add("table-striped");
    tabla.classList.add("table-hover");
    return tabla;
}

function crearCabeceraTabla(objeto)
{
    let thead = document.createElement("thead");
    let tr = document.createElement("tr");

    for (const key in objeto) {
        
        let th = document.createElement("th");
        let texto = document.createTextNode(key);
        th.appendChild(texto);
        tr.appendChild(th)
    
    }

    thead.appendChild(tr);
    thead.classList.add("thead-dark");
    thead.classList.add("text-capitalize");
    thead.classList.add("text-center");
    return thead;
}

function crearCuerpoTabla(arr)
{
    let tbody = document.createElement("tbody");
    
    arr.forEach(element => {
        let tr = document.createElement("tr");
        for (const key in element) {
            let td = document.createElement("td");
            let texto = document.createTextNode(element[key]);
            
            td.appendChild(texto);
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    });


    return tbody;
}

function refrescarDiv(div, tabla)
{
    while(div.hasChildNodes())
    {
        div.removeChild(div.firstChild);
    }

    div.appendChild(tabla);
}

function filtrarSexo(arr, sexo)
{
    return arr.filter(p=>p.genero === sexo);
}

function mapearMails(arr)
{
    return arr.map(e=>({email:e.email, sueldo:e.sueldo}));
}