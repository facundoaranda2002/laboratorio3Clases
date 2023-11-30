
/* Otra forma de hacerlo
document.getElementById("btnCerrar").addEventListener("click", 
()=>{
    document.getElementsByTagName("dialog")[0].close()
})
*/

const modal = document.getElementsByTagName("dialog")[0];

document.getElementById("btnCerrar").addEventListener("click", 
()=>{
    modal.close()
})


document.getElementById("btnOpen").addEventListener("click", 
()=>{
    modal.open = true;
})