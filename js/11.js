let nombre1 = prompt("ingrese el primer nombre");
let edad1 = Number(prompt("ingrese la primer edad"));
let nombre2 = prompt("ingrese el segundo nombre");
let edad2 = Number(prompt("ingrese la segunda edad"));
let nombre3 = prompt("ingrese el tercer nombre");
let edad3 = Number(prompt("ingrese la tercer edad"));
let maximo = Math.max(edad1, edad2, edad3);
if(maximo == edad1){
    document.write("el mayor es  " + nombre1 + "<br>")
}
if(maximo == edad2){
    document.write("el mayor es  " + nombre2 + "<br>")
}
if(maximo == edad3){
    document.write("el mayor es  " + nombre3 + "<br>")
}