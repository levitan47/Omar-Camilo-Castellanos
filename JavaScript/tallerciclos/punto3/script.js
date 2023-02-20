/*3.Diseñe un algoritmo en el cual solicite al usuario un numero entero positivo mayor a 10 y menor a 15 despues debe calcular el factorial de este numero
e imprimirlo en pantalla. */

num =Number(prompt("Por favor ingrese un numero mayor que 10 y menor que 15"));

function factorial (num) {
	var total = 1; 
	for (i=1; i<=num; i++) {
		total = total * i; 
	}
	return total; 
}

if(num>0){

	if(num==11 || num==12 || num==13 || num==14 ){

		document.write("El factorial de el numero " + num + " es: "+ factorial(num)); 
	}else{
		alert("El numero no es mayor que 10 o menor que 15");
	}
}else{
	alert("El numero es negativo");
}
