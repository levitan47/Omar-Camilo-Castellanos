/*6. Un comerciante desea aplicar un descuento a sus productos en funcion a sus precios de la siguiente manera:

	1. Si el precio es mayor a $100 el 10%
	2. Si el precio es mayor a $100 y menor a $200 el 20%
	3. Si el precio es mayor a $200 el 25%

Es su deber como desarrollador escribir un algoritmo que le permita al comerciante ingresar la cantidad de productos y el precio de cada uno. El algoritmo
tambien debe imprimir en pantalla el calculo de los descuentos. */

let precioprod=0;


	prod=Number(prompt("Ingrese la cantidad de productos que va a vender"));
	
	console.log(prod);

	if(prod!=0){

	let preciodesc=0;
	let preciofinal=0;


		for(let i=1; i<=prod; i++){
			let precio=Number(prompt("Ingrese la el precio de los productos de productos que va a vender"));
			console.log(precio);

			if(precio<100){
				preciodesc=precio*0.1;
				preciofinal=precio-preciodesc;
				document.write("El descuento es del 10% y su valor final es: " + preciofinal + "<br>");
			}else if(100<precio && precio<200){
				preciodesc=precio*0.2;
				preciofinal=precio-preciodesc;
				document.write("El descuento es del 20% y su valor final es: " + preciofinal + "<br>");
			}else if(precio>200){
				preciodesc=precio*0.25;
				preciofinal=precio-preciodesc;
				document.write("El descuento es del 25% y su valor final es: " + preciofinal + "<br>");
			}

		}

	}else{
		alert("No hay valores en la lista");
	}



