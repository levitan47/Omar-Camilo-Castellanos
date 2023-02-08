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
var j;
var Ntalent= 0;




for(i=0;cod!=13;i++){

    cod=parseInt(prompt(menu));

    switch(cod){
    case 1:
       Ntalent=parseInt(prompt("Ingrese la cantidad de talentos a los que va a registrar"));

        if(Ntalent>0){
            console.log(Ntalent)
            Talentos.length=Ntalent
            
        }else{
            alert("Por favor ingrese un valor mayor a 0");
        }

        break;
    case 2:
        var Codig;
        var Nom;
        var i;

        Codig=prompt("Porfavor ingrese el codigo del talento");
        Nom=prompt("Porfavor ingrese el nombre del talento");

            if(Codig>0){
                Talentos.push(Codig, Nom)
            }else{
                alert("El codigo ingresado ya esta registrado");
            }

        break;
    case 3:
                

            M1=parseInt(prompt("Por favor, ingrese la nota que el estudiante saco en la Mision 1"));

                if(0>M1<100){
                Talentos.push(M1)
                }else{
                    alert("Por favor ingrese un valor mayor a 0 y menos que 100");
                }
            
        
        break;
    case 4:

                M2=parseInt(prompt("Por favor, ingrese la nota que el estudiante saco en la Mision 2"));

                if(0>M2<100){
                Talentos.push(M2)
                }else{
                    alert("Por favor ingrese un valor mayor a 0 y menos que 100");
                }

        

        
        break;
    case 5:

                M3=parseInt(prompt("Por favor, ingrese la nota que el estudiante saco en la Mision 3"));

                if(0>M3<100){
                    Talentos.push(M3)
                    }else{
                        alert("Por favor ingrese un valor mayor a 0 y menos que 100");
                    }

        break;
    case 6:
        MF=parseInt(prompt("Por favor, ingrese la nota que el estudiante saco en la Mision 3"));

                if(0>MF<100){
                    Talentos.push(MF)
                    }else{
                        alert("Por favor ingrese un valor mayor a 0 y menos que 100");
                    }
                    console.log(Talentos)
                

        break;
    case 7:
        for(j=0; j<Talentos.length ;j++){
        console.log(j);
        console.log("El Talento con mejor nota se llama: " + Talentos[j]["Nombre"] + " Con una nota de: " + Math.max(Talentos[j]["Ms1"]));
        }
      

        break;
    case 8:

        for(j=0; j<Talentos.length ;j++){
            console.log(j);
            console.log("El Talento con mejor nota se llama: " + Talentos[j]["Nombre"] + " Con una nota de: " + Math.max(Talentos[j]["Ms2"]));
            }

        break;
    case 9:

        for(j=0; j<Talentos.length ;j++){
            console.log(j);
            console.log("El Talento con mejor nota se llama: " + Talentos[j]["Nombre"] + " Con una nota de: " + Math.max(Talentos[j]["Ms3"]));
            }

        break;
    case 10:
             let suma=0;
             let prom=0;

        for(j=0; j<Talentos.length ;j++){

            suma = Talentos[j]["Ms1"] + Talentos[j]["Ms2"] + Talentos[j]["Ms3"] + Talentos[j]["MsF"];
            prom=suma/4;
            console.log(prom);
            console.log("El Talento con mejor nota se llama: " + Talentos[j]["Nombre"] + " Con una nota de: " + prom);
            }

        break;
    case 11:
        for(j=0; j<Talentos.length ;j++){

        console.log("El nombre del estudiante es: "+ Talentos[j]["Nombre"] + " y sus notas son: nota1=" + Talentos[j]["Ms1"] + " Nota2=" + Talentos[j]["Ms2"] + " Nota3=" +Talentos[j]["Ms3"] + " Nota final=" + Talentos[j]["MsF"]);
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


