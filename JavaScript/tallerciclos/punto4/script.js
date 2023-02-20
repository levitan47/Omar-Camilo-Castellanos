/*4. Diseñe un menu de opciones para simular una calculadora con las siguientes operaciones:

	1. Sumar 2 numeros
	2. Restar 3 numeros
	3. Multiplicar 2 numeros
	4. Dividir 2 numeros  ( el divisor debe ser diferente de 0 ) 
	0. Salir de la calculadora
Cuando el usuario desee salir de la calculadora debe mostrar un mensaje de despedida en la consola. */

let menu = "Menu calculadora \n";
menu += "1. Sumar 2 numeros \n";
menu += "2. Restar 3 numeros\n";
menu += "3. Multiplicar 2 numeros\n";
menu += "4. Dividir 2 numeros \n";
menu += "0. Salir de la calculadora\n";

var cod=0;


for(i=0;i<=cod;i++){

	cod=parseInt(prompt(menu));
	switch(cod){
		case 1:
			num1=Number(prompt("Por favor ingrese el primer numero."));
			num2=Number(prompt("Por favor ingrese el segundo numero."));

			suma=0;
			suma=num1+num2

			alert("El resultado de la suma es: "+ suma);

			break;
		case 2:
			num1=Number(prompt("Por favor ingrese el primer numero."));
			num2=Number(prompt("Por favor ingrese el segundo numero."));
			num3=Number(prompt("Por favor ingrese el tercer numero."));

			resta=0;
			resta=num1-num2-num3;

			alert("El resultado de la resta es: "+ resta);

			break;
		case 3:
			num1=Number(prompt("Por favor ingrese el primer numero."));
			num2=Number(prompt("Por favor ingrese el segundo numero."));

			multi=0;
			multi=num1*num2

			alert("El resultado de la multiplicacion es: "+ multi);

			break;
		case 4:
			num1=Number(prompt("Por favor ingrese el primer numero."));
			num2=Number(prompt("Por favor ingrese el segundo numero."));

			if(num2!=0){
				division=0;
				Number(division=num1/num2);

				alert("El resultado de la division es: "+ division);
			}else{
				alert("El divisor es 0, la division no se puede realizar");
			}
			
			break;
		case 0:
			console.log("Gracias y hasta luego");
			break;
	}
}

