//1. Haga la sucesion de Fibonacci

var limit = prompt("ingrese el limite de la operacion de fibonacci");
	var fibo = [
    ];

	num1=Number(prompt("Ingrese el primer número"));
	num2=Number(prompt("Ingrese el segundo número"));

	fibo.push(num1,num2)

	for(i=2; i <= limit; i++){
		fibo.push(fibo[i-1] + fibo[i-2]);
		document.write(fibo[i]+"<br/>");	
	}