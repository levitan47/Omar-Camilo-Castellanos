/*5.Desarrolle un algoritmo que permit convertir calificaciones numericas, segun la siguiente tabla:
	A = 19 y 20.
	B = 16, 17 y 18.
	C = 13, 14 y 15. 
	D = 10, 11 y 12.
	E = 1 hasta 9.

Las notas solo pueden ser numeros entre 1 y 20.*/

num = prompt("Ingrese la nota");

if(num==19 || num==20){
    console.log("La calificacion es: A");
}else if(num==16|| num==17|| num==18){
    console.log("La calificacion es: B");
}else if(num==13|| num==14|| num== 15){
    console.log("La calificacion es: C");
}else if(num==10|| num==11|| num==12){
    console.log("La calificacion es: D");
}else if(num>=0 && num<=9){
    console.log("La calificacion es: E");
}else{
    console.log("El numero ingresado es menor que 0 o mayor que 20");
}