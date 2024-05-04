var span = 0;

function comptage() {
  span++;
  document.getElementById("quantity").textContent = span;
}
function comptage2() {
    if ( span > 0){
    span--;
    document.getElementById("quantity").textContent = span;
    }else{   
    span =0 
    document.getElementById("quantity").textContent  = span;
     }
}

document.getElementById("plus").addEventListener("click", comptage);
document.getElementById("moin").addEventListener("click", comptage2);
