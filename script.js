// let numerokm = document.getElementById("input-km").value;
// let eta = document.getElementById("input-eta").value;   <>

let numerokm = prompt("Km");
let eta = prompt("eta");


console.log("Km: " + numerokm + " Età: "+ eta);



let prezzo = numerokm * 0.21;

console.log("Prezzo intero: "+ prezzo.toFixed(2));

if (eta < 18){
    prezzo -= (prezzo*20)/100;
    console.log("giovane: "+ prezzo.toFixed(2));

} else if(eta > 65){
    prezzo -= (prezzo*40)/100;
    console.log("vecchio: "+ prezzo.toFixed(2));


}else if(eta >= 18 && eta <= 65){
    console.log("prezzo intero: "+ prezzo.toFixed(2));

}else {
    console.log("eta non valida");

}

if (isNaN(prezzo)||isNaN(eta)){
    console.log("qualcosa è andato storto, ricaricare la pagina")
}