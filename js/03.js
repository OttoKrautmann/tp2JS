let resultado = ""
do{
    let cadena = prompt("introduce palabras")
    if(resultado == ""){
        resultado = resultado + cadena
    }else{
        resultado = resultado + " - " + cadena
    }
}while(confirm("Desea seguir?"))
document.write(resultado)