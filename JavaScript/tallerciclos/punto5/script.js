/*5. Diseñe un algoritmo que reciba un numero entero positivo mayor a 100 y luego imprima todos los numeros primos que hay antes de ese nuemro ingresado. */

num=Number(prompt("Ingrese el numero con el cual desea que se encuentren los primos anteriores(este debe ser mayor que 100)"));

function esPrimo(numero) {
    
    for(let i = 2,raiz=Math.sqrt(numero); i <= raiz; i++)
        if(numero % i === 0) return false;
    return numero > 1;
}  

if(num>100){
    for (let x=0;x<=num;x++) {
        if (esPrimo(x))
            console.log("El número " + x + " es primo \n");
    }
}else{
    alert("El numero es menor que 100");
}
