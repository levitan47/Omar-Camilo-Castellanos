//9.Desarrolle un algoritma que reciba un numero entero e imprima si el numero es par o impar. Ademas el numero debe ser positivo.


num=Number(prompt("Escriba un numero para saber si es par o impar"));

if(Number.isInteger(num)){
    if(num>0){
        if(num%2==0){
            console.log("El número "+num+" es par");
        }else{
            console.log("El número "+num+" es impar");
        }
    }else{
        alert("El numero es negativo");
    }
    
}else{
    alert("El numero no es un numero entero");

}

