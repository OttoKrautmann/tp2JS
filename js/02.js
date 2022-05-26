let nota = parseInt(prompt("ingrese una nota"))
if(nota < 3){
    document.write("muy deficiente")
}else if(3<= nota && nota <5){
    document.write("deficiente")
}else if(5<= nota && nota <7){    
    document.write("suficiente")
}else if(7<= nota && nota <8){
    document.write("bien")
}else if(8<= nota && nota <10){
    document.write("notable")
}else if(nota == 10){
    document.write("sobresaliente")
}else{
    document.write("ingrese una nota valida")

}