/*2.Desarrolle un algoritmo que reciba la base y altura de un triangulo en cm. Los 2 valores ingresados no pueden ser iguales, ademas el algoritmo debe calcular el area del triangulo si la base es mayor a 5cm y la altura es mayor a 4cm, si no lo son el algoritmo debe imprimir el valor de la
 base multiplicado por 2 y sumarle 10.*/


 base=prompt("Por favor ingrese la base del triangulo en centimetros");
 altura=prompt("Por favor ingrese la altura del triangulo en centimetros");

 if(base==altura){
    alert("El numero 1 es igual al numero 2 por favor ingrese valores diferentes");
} else if(base>=5, altura>=4){
    area=0;

    area=(base*altura)/2

    console.log("El area es: " + area);
} else {

    area=0;
    
    console.log(base);

    area=(base*2)+10;

    console.log("El area ya que la base es menor de 5cm y la altura a 4cm es: " + area);
}
