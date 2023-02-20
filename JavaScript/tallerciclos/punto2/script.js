/*2.Diseñe un algoritmo en el cual el usuario deba ingresar 2 numeros enteros n y m. Estos numeros serviran para definir un intervalo. La funcion del algoritmo sera sumar todos los numeros pares que se encuentren dentro del intervalo [n.m]. */

numeros=[];

num1=Number(prompt("Ingrese el primer numero entero"));
num2=Number(prompt("Ingrese el segundo numero entero"));

numeros.push(num1,num2);

console.log(numeros)

  function sumaTodos (numeros) {
	let inicio = numeros[0];
	let fin = numeros[1];
	let suma = 0;
	
	for (let i = inicio; i <= fin; i++) {
	  suma += i;
	}
	
	return suma;
  }

  console.log(sumaTodos(numeros));