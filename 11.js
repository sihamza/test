var nombreClics = 0;

function comptage() {
  nombreClics++;
  document.getElementById("nombreClics").textContent   = nombreClics;
}
function comptage2() {
    if ( nombreClics > 0){
    nombreClics--;
    document.getElementById("nombreClics").textContent   = nombreClics;
    }else{   
    nombreClics =0 
    document.getElementById("nombreClics").textContent   = nombreClics;
     }
}

document.getElementById("boutonClic").addEventListener("click", comptage);
document.getElementById("boutonClic2").addEventListener("click", comptage2);


