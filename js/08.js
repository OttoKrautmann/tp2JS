let numero = prompt("ingrese un numero entre 1 y 50");
if(Number(numero) == numero){
    if(numero>0 && numero<=50){
        let rep, i;
        for(i=0; i<=numero; i++){
            for(rep=1; rep<=i; rep++){
                document.write(rep);
            }
            document.write("<br>");
        }
    }else{
        alert("ingreso un numero por afuera del rango")
    }
}else{
    alert("no ingreso un numero")
}