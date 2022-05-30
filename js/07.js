let numero = prompt("ingrese un numero menor o igual a 50")
if(Number(numero)==numero){
    if(numero>0 && numero<=50){
        let rep, i;
        for(i = numero; i>=1; i--){
            for(rep = i; rep>=1; rep--){
                document.write(i);
            }
            document.write("<br>")
        }
    }else{
        alert("escribio un numero mayor a 50")
    }
}else{
    alert("No escribio un numero")
}