//6.Pedir dos números y decir si non múltiplos o no.

num1=prompt("Por favor ingrese el numero 1");
num2=prompt("Por favor ingrese el numero 2");

if(( num1 % num2 ) == 0){
    
    alert(num1 + ' es multiplo de ' + num2);
    
}else{

    alert(num1 + ' no es multiplo de ' + num2);

}