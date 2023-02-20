/*1.Desarrolle un algoritmo que permita leer 3 números enteros. El algoritmo debe imprimir cual es el numero mayor y cual es el numero menor entre los 3.
Ademas ninguno de los 3 numeros ingresados pueden ser iguales. En caso de que el usuario ingrese 2 numeros iguales debe mostrar una alerta.*/

const numeros=[]

num1=prompt("Por favor ingrese el primer número");
num2=prompt("Por favor ingrese el segundo número");
num3=prompt("Por favor ingrese el tercer número");



if(num1==num2){
    alert("El numero 1 es igual al numero 2 por favor ingrese nuevos valores");
} else if(num1==num3){
    alert("El numero 1 es igual al numero 3 por favor ingrese nuevos valores");
} else if(num2==num3){
    alert("El numero 2 es igual al numero 3 por favor ingrese nuevos valores");
}else{
    numeros.push(num1, num2, num3);

    console.log(numeros);

    var minimo=Math.min.apply(null, numeros);
    var maximo=Math.max.apply(null, numeros);
        
    console.log("el valor maximo es: " + maximo);
    console.log("el valor minimo es: " + minimo);
}

