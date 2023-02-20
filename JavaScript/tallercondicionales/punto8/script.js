//8.Pedir tres números enteros con un valor del 1 al 10, sacar el promedio de los tres números y mostrar true si el promedio es mayor a 5 caso contrario mostrar false, utilizar el operador ternario.


num1 = Number(prompt("Por favor ingrese en numero 1 que sean mayores a 1 pero menores que 10"));
num2 = Number(prompt("Por favor ingrese en numero 2 que sean mayores a 1 pero menores que 10"));
num3 = Number(prompt("Por favor ingrese en numero 3 que sean mayores a 1 pero menores que 10"));

if(1>=num1<=10&&1>=num2<=10&&1>=num3<=10){
let prom=0;
let suma=0;

suma=(num1+num2+num3);
prom=suma/3;
prom > 5? (console.log('el promedio es: ' + prom)) : (console.log("fasle"))

}else{
    alert("Los valores son mayores a 1 y menores que 10");
}

 