let Talentos=[{
    Codigo: 1,
    Nombre: "Omar",
    Ms1: 50,
    Ms2: 80,
    Ms3: 40,
    MsF: 70,
}]

let menu="Menu Talentos\n";
menu+="1. Ingrese la cantidad de talentos\n";
menu+="2. Ingrese los datos de el talento\n";
menu+="3. Ingrese la nota de la mision 1\n";
menu+="4. Ingrese la nota de la mision 2\n";
menu+="5. Ingrese la nota de la mision 3\n";
menu+="6. Ingrese la nota de la mision final\n";
menu+="7. Nombre del talento con la nota de la primera mision\n";
menu+="8. Nombre del talento con la nota de la segunda mision\n";
menu+="9. Nombre del talento con la nota de la tercera mision\n";
menu+="10. Nombre del talento con su promedio (total misiones)\n";
menu+="11. Nombre del talento con la nota de la tercera mision\n";
menu+="12. Toda informacion del talento\n";
menu+="13. Salir\n";


var M1=0;
var M2=0;
var M3=0;
var MF=0;
var cod=0;
var i;
var x;
var j;
var z;
var v;
var m;
var n;
var Ntalent= 0;




for(i=0;cod!=13;i++){

    cod=parseInt(prompt(menu));

    switch(cod){
    case 1:

    
 if(Ntalent==0){
    Ntalent=parseInt(prompt("Ingrese la cantidad de talentos a los que va a registrar"));
    if(Ntalent>0){
        console.log(Ntalent)
        Talentos.length=Ntalent
        
    }else{
        alert("Por favor ingrese un valor mayor a 0");
    }
 } else{
    alert("Ya hay un valor definido");
 }
       

    

        break;
    case 2:
        if(Ntalent!=0){

        var Codig;
        var Nom;
        var i;

        for(x=0; x<Ntalent ;x++){

        Codig=prompt("Porfavor ingrese el codigo del talento");
        Nom=prompt("Porfavor ingrese el nombre del talento");

            if(Codig>0){
                Talentos.push(Codig, Nom)
            }else{
                alert("El codigo ingresado ya esta registrado");
            }
        }

    }else{
        alert("Aun no se han definido los estudiantes");
    }

        break;
    case 3:

        if(Ntalent!=0){

            M1=parseInt(prompt("Por favor, ingrese la nota que el estudiante saco en la Mision 1"));

                if(0>M1<100){
                Talentos.push(M1)
                }else{
                    alert("Por favor ingrese un valor mayor a 0 y menos que 100");
                }
        }else{
            alert("Aun no se han definido los estudiantes");
        }
        
        break;
    case 4:
        if(Ntalent!=0){

                M2=parseInt(prompt("Por favor, ingrese la nota que el estudiante saco en la Mision 2"));

                if(0>M2<100){
                Talentos.push(M2)
                }else{
                    alert("Por favor ingrese un valor mayor a 0 y menos que 100");
                }

        
            }else{
                alert("Aun no se han definido los estudiantes");
            }
        
        break;
    case 5:
        if(Ntalent!=0){

                M3=parseInt(prompt("Por favor, ingrese la nota que el estudiante saco en la Mision 3"));

                if(0>M3<100){
                    Talentos.push(M3)
                    }else{
                        alert("Por favor ingrese un valor mayor a 0 y menos que 100");
                    }

                }else{
                    alert("Aun no se han definido los estudiantes");
                }

        break;
    case 6:

    if(Ntalent!=0){
        
        MF=parseInt(prompt("Por favor, ingrese la nota que el estudiante saco en la Mision 3"));

                if(0>MF<100){
                    Talentos.push(MF)
                    }else{
                        alert("Por favor ingrese un valor mayor a 0 y menos que 100");
                    }
                    console.log(Talentos)
                
                }else{
                    alert("Aun no se han definido los estudiantes");
                }
        break;
    case 7:
        for(z=0; z<Talentos.length ;z++){
        console.log(z);
        console.log("El Talento con mejor nota se llama: " + Talentos[z]["Nombre"] + " Con una nota de: " + Math.max(Talentos[z]["Ms1"]));
        }
        
      

        break;
    case 8:

        for(j=0; j<Talentos.length ;j++){
            console.log(j);
            console.log("El Talento con mejor nota se llama: " + Talentos[j]["Nombre"] + " Con una nota de: " + Math.max(Talentos[j]["Ms2"]));
            }

        break;
    case 9:

        for(v=0; v<Talentos.length ;v++){
            console.log(v);
            console.log("El Talento con mejor nota se llama: " + Talentos[v]["Nombre"] + " Con una nota de: " + Math.max(Talentos[v]["Ms3"]));
            }

        break;
    case 10:
             let suma=0;
             let prom=0;

        for(m=0; m<Talentos.length ;m++){

            suma = Talentos[m]["Ms1"] + Talentos[m]["Ms2"] + Talentos[m]["Ms3"] + Talentos[m]["MsF"];
            prom=suma/4;
            console.log(prom);
            console.log("El Talento con mejor nota se llama: " + Talentos[m]["Nombre"] + " Con una nota de: " + prom);
            }

        break;
    case 11:
        for(n=0; n<Talentos.length ;n++){

        console.log("El nombre del estudiante es: "+ Talentos[n]["Nombre"] + " y sus notas son: nota1=" + Talentos[n]["Ms1"] + " Nota2=" + Talentos[n]["Ms2"] + " Nota3=" +Talentos[n]["Ms3"] + " Nota final=" + Talentos[n]["MsF"]);
    }
        break;
    case 12:
        alert("El desarrollador es Omar Camilo Castellanos Avila");
        break;
    case 13:
        break;
    }
    
}
function promedio(talentos){
    let prom=0;
    var i = 0, suma = 0, ArrayLen = talentos.length;
    while (i < ArrayLen) {
    suma = suma + talentos[i++];
    }
    prom=suma/ArrayLen;
    console.log(prom)
}


