let startButton = document.getElementById("button");

startButton.addEventListener('click', function(){

//     let numerokm = prompt("Km");
//     let eta = prompt("eta");<>

let numerokm = document.getElementById("input-km").value;
let eta = document.getElementById("input-eta").value;   

console.log("Km: " + numerokm + " Età: "+ eta);

let prezzo = numerokm * 0.21;

console.log("Prezzo intero: "+ prezzo.toFixed(2));

if (eta > 0 && eta < 18){
    prezzo -= (prezzo*20)/100;
    console.log("Sconto giovani: "+ prezzo.toFixed(2));

    document.getElementById("sconto").innerHTML = "Sconto giovani";
    document.getElementById("prezzo").innerHTML = prezzo.toFixed(2) +" &euro;";

} else if(eta > 65 && eta < 120){
    prezzo -= (prezzo*40)/100;
    console.log("Sconto anziani: "+ prezzo.toFixed(2)); 

    document.getElementById("sconto").innerHTML = "Sconto anziani";
    document.getElementById("prezzo").innerHTML = prezzo.toFixed(2) +" &euro;";


}else if(eta >= 18 && eta <= 65){
    console.log("prezzo intero: "+ prezzo.toFixed(2));

    document.getElementById("sconto").innerHTML = "Prezzo intero";
    document.getElementById("prezzo").innerHTML = prezzo.toFixed(2) +" &euro;";


}else {
    console.log("eta non valida");
    let errore = document.getElementById("prezzo");

    errore.classList.add("bg-danger")
    document.getElementById("prezzo").innerHTML = "&#9888; qualcosa è andato storto, ricaricare la pagina";


}

// INUTILE
if (isNaN(prezzo)||isNaN(eta)||numerokm<0){
    console.log("qualcosa è andato storto, ricaricare la pagina")
   
}
})

