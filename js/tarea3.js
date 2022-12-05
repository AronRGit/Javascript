//Numero Primo
const boton = document.getElementById("btncalcular");
boton.onclick = function(){
const resultado = document.getElementById("resultado");
const number = document.getElementById("number");
numero = number.value;
    function esPrimo(n) {
        let divisores= 0;    
        let mensaje="";
        for (let i = 1; i<=n; i++) {
               if (n%i==0) {
                        divisores++
               }  
        }
        if (divisores==2) {
           mensaje= "El numero es primo";
       }
       else{
            mensaje= "El numero no es primo";
       }
       return mensaje; 
    }
 
 resultado.innerText= esPrimo(numero);
}

//Ejercicio 1
function salario(horas=0,tarifa=0) {
    let salario=0;
    if(horas>40){
       horasextras= horas-40;
       salario=(40*tarifa)+(horasextras*(tarifa*1.5))
    }
    else{
        salario=horas*tarifa;
    }
    return salario;
}
const htrabajo = document.getElementById("htrabajo");
const tarifaporhora = document.getElementById("tarifa");
const btncalcular1 = document.getElementById("btncalcular1");
const resultado1 = document.getElementById("resultado1");


btncalcular1.onclick = function(){
    hTrabajo= htrabajo.value;
    tarifaporHora=tarifaporhora.value;  
    resultado1.innerText="El salario es"+salario(hTrabajo,tarifaporHora);
}

//Ejercicio 2
function perimetroCircunferencia(radio=0) {
    let mensaje="";
    perimetro = (2* 3.1416)*radio;
    perimetro50= (2* 3.1416)*(radio*0.5);
    perimetro25=(2* 3.1416)*((radio*0.5)*0.25);
    mensaje=`El perimetro es ${perimetro}, el segundo perimetro es  ${perimetro50} y el ultimo perimetro es  ${perimetro25}`
    return mensaje;
}
const radio = document.getElementById("radio");
const resultado2 = document.getElementById("resultado2");
const btncalcular2 = document.getElementById("btncalcular2");

btncalcular2.onclick = function(){
    let radioCircunferencia=radio.value;
    resultado2.innerText= perimetroCircunferencia(radioCircunferencia);
}
//Ejercicio 3
function calcular_salario(horastrabajadas=0,tarifaxh=0) {
    let salarioTrabajador = 0;
    let mensaje="";
    salarioTrabajador=horastrabajadas*tarifaxh;
    salarioTrabajador10= salarioTrabajador*0.1;
    salarioTrabajador30= salarioTrabajador*0.3;
    salarioTrabajador60= salarioTrabajador*0.6;
    salarioTrabajador80= salarioTrabajador*0.8;
    mensaje=`El salario es ${salarioTrabajador},el 10% del salario es ${salarioTrabajador10},el 30% del salario es ${salarioTrabajador30},el 60% del salario es ${salarioTrabajador60} y el 80% del salario es  ${salarioTrabajador80}`;
    return mensaje;
    
}
const horasT= document.getElementById("horasdetrabajo");
const tarifapagada= document.getElementById("tarifapagada");
const resultado3 = document.getElementById("resultado3");
const btncalcular3 = document.getElementById("btncalcular3");

btncalcular3.onclick = function(){
    let horasTP=horasT.value;
    let tarifaPagada=tarifapagada.value;
    resultado3.innerText= calcular_salario(horasTP,tarifaPagada);
}
//Ejercicio 4

function notaAlumno(notaparciales=0,notaefinal=0,notatfinal=0) {
     let nota=0;
     nota= (notaparciales*0.55)+(notaefinal*0.3)+(notatfinal*0.15);
     return nota;
}
const promedioparciales= document.getElementById("promedioparciales");
const examenfinal= document.getElementById("examenfinal");
const trabajofinal= document.getElementById("trabajofinal");
const resultado4 = document.getElementById("resultado4");
const btncalcular4 = document.getElementById("btncalcular4");

btncalcular4.onclick = function(){
    let parciales =promedioparciales.value;
    let examen =examenfinal.value;
    let trabajo=trabajofinal.value;
    resultado4.innerText= notaAlumno(parciales,examen,trabajo);
}
//Ejercicio 5

function presupuestoHospital(presupuesto) {
    let mensaje="";
     gine = presupuesto*0.4;
     trauma = presupuesto*0.3;
     pedia = presupuesto*0.3;
     mensaje= `El presupuesto para el area de Ginecologia es ${gine}, para el area de traumatologia es ${trauma} y para el area de Pediatria es de ${pedia}`
     return mensaje
}

const presupuesto = document.getElementById("presupuesto");
const resultado5 = document.getElementById("resultado5");
const btncalcular5 = document.getElementById("btncalcular5");

btncalcular5.onclick = function(){
    let totalpresupuesto =presupuesto.value;
    resultado5.innerText= presupuestoHospital(totalpresupuesto);
}