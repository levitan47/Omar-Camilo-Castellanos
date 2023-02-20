/* */
alert("Bienvenido a la escuela pequeños brocolitos")
let promexamenes;
let promtrabajos;
let promexamfinal;
let promautoevalua;
let exam1,exam2,exam3, examfinal;
let trab1,trab2;
let auto, coeva;

i=0;
do{ exam1=Number(prompt("Ingrese la nota del examen número 1"));
if(exam1>=0 && exam1<=5){
    i=1;
} else {
    alert("El valor de la nota del primer examen es menor que 0 o mayor que 5, por favor ingrese un valor valido");
}}while(i!=1);

i=0;
do{exam2=Number(prompt("Ingrese la nota del examen número 2"));
    if(exam2>=0 && exam2<=5){
        i=1;
} else{
    alert("El valor de la nota del segundo examen es menor que 0 o mayor que 5, por favor ingrese un valor valido");
}}while(i!=1);

i=0;
do{exam3=Number(prompt("Ingrese la nota del examen número 3"));
if(exam3>=0 && exam3<=5){
    i=1;
}else{
    alert("El valor de la nota del tercer examen es menor que 0 o mayor que 5, por favor ingrese un valor valido");
}}while(i!=1);

let promexam=0;
            console.log(exam1);
            console.log(exam2);
            console.log(exam3);
promexam=(exam1+exam2+exam3)/3
console.log("El promedio de los examenes es: " +promexam);
promexamenes = promexam*0.55;


i=0;
do{trab1=Number(prompt("Ingrese la nota del trabajo número 1"));
if(trab1>=0 && trab1<=5){
    i=1;
} else {
    alert("El valor de la nota del primer trabajo es menor que 0 o mayor que 5, por favor ingrese un valor valido");
}}while(i!=1);

i=0;
do{trab2=Number(prompt("Ingrese la nota del trabajo número 2"));
    if(trab2>=0 && trab2<=5){
        i=1;
} else{
    alert("El valor de la nota del segundo trabajo es menor que 0 o mayor que 5, por favor ingrese un valor valido");
}}while(i!=1);

let promtrab=0;
            
        promtrab=(trab1+trab2)/2
        console.log("El promedio de los trabajos es: " +promtrab);
        promtrabajos = promtrab*0.15;

i=0;
    do{examfinal=Number(prompt("Ingrese la nota del examen final"));
        if(examfinal>=0 && examfinal<=5){
            i=1;
    } else{
            alert("El valor de la nota del examen final es menor que 0 o mayor que 5, por favor ingrese un valor valido");
    }}while(i!=1);

promexamfinal = examfinal*0.2;


i=0;
    do{auto=Number(prompt("Ingrese la nota de la autoevaluacion"));
        if(auto>=0 && auto<=5){
            i=1;
    } else{
            alert("El valor de la nota de la autoevaluacion es menor que 0 o mayor que 5, por favor ingrese un valor valido");
    }}while(i!=1);


    i=0;
    do{coeva=Number(prompt("Ingrese la nota de la co-evaluacion del docente"));
        if(coeva>=0 && coeva<=5){
            i=1;
    } else{
            alert("El valor de la nota de la autoevaluacion es menor que 0 o mayor que 5, por favor ingrese un valor valido");
    }}while(i!=1);

    promautoevaa=(auto+coeva)/2
    promautoevalua = promautoevaa*0.1;
    let suma=promexamenes+promtrabajos+promexamfinal+promautoevalua
    console.log(suma);

    if(suma>=4.7 && suma<=5){
        alert("El nivel en el que esta el estudiante es: Superior con un promedio de: " + suma);
    }else if(suma>=4.0 && suma<=4.6){
        alert("El nivel en el que esta el estudiante es: Alto con un promedio de: " + suma);
    }else if(suma>=3.0 && suma<=3.9){
        alert("El nivel en el que esta el estudiante es: Basico con un promedio de: " + suma);
    }else if(suma>=2.0 && suma<=2.9){
        alert("El nivel en el que esta el estudiante es: Bajo con un promedio de: " + suma);
    }else if(suma>=0 && suma<=1.9){
        alert("El nivel en el que esta el estudiante es: Muy bajo con un promedio de: " + suma);
    }
