//Ejercicio 1
const frase = document.getElementById("capitalizado");
const btnconvertir = document.getElementById("btnconvertir");

btnconvertir.onclick = function(){
    let texto = prompt("Ingresa una frase");

let capitalizado = function(string){
    let palabras =texto.split(" ");
    for (let i = 0; i < palabras.length; i++) {
        palabras[i] = palabras[i][0].toUpperCase() + palabras[i].substr(1);
        
    } 
  return  palabras.join(" ");
}
frase.innerText = capitalizado(texto);
}
//Ejericio 2
let persona = {
    nombre: "",
    apellido: "Pacheco",
    edad: 38,
    profesion: ""
}
const btnverificar = document.getElementById("btnverificar");
const btnLlenar = document.getElementById("btnLlenar");
const verificar = document.getElementById("verificar");
const resultado = document.getElementById("resultado");
const btnrevisar = document.getElementById("btnrevisar");

btnverificar.onclick = function(){
    for (const prop in persona) {
        if (persona[prop]==="") {
           alert(`${prop} esta vacio`);
            
            
        }
    }
}
//3. Para el ejercicio anterior, crear una funcion que dados los datos pendientes, lance un prompt para que el usuario
// complete los datos faltantes. Debe verificar que el dato ingresado no este vacio y que corresponda al tipo de dato.
function completarDatos() {
    for (const prop in persona) {
        if (persona[prop]==="") {
            persona[prop]  = prompt(`Ingresa el dato ${prop}`);
        }
    }
    resultado.innerText=  persona.nombre;
    resultado.innerText+= "\n"+persona.apellido;
    resultado.innerText+= "\n"+persona.edad;
    resultado.innerText+= "\n"+persona.profesion;
}
btnLlenar.onclick= function(){
    completarDatos();
} 

//Ejercico 4 
 let users = [
    {nombre: "", apellido: "Pacheco", edad: 38, profesion: ""},
    {nombre: "Andrea", apellido: "", edad: 25, profesion: "profesor"},
    {nombre: "Julia", apellido: "", edad: 32, profesion: "musico"},
    {nombre: "", apellido: "Martinez", edad: 29, profesion: "programador"},
    {nombre: "Roberto", apellido: "Mattos", edad: 40, profesion: ""},
    {nombre: "Mercedes", apellido: "Sanchez", edad: 35, profesion: "veterinario"},
    ]
    function agregarDatosRevisar(user){
    let usuarios = [];
    let completar="";
    
    for(let i=0; i<user.length; i++){
    for(const prop in user[i]){
    if(user[i][prop]===""){
    completar=prompt(`Escribe ${prop}: `);
    user[i][prop] = completar;
    usuarios.push(`${prop}: `+ `${completar}`);
    }
    }
    }
    return user;
    }
    btnrevisar.onclick =function(){
        agregarDatosRevisar(users);
        console.log(users);
    }
