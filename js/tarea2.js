//Declarando variables
const btnComprar = document.getElementById("btnComprar");
btnComprar.onclick = function(){
const monopolio = document.getElementById("monopolio");
const ajedrez = document.getElementById("ajedrez");
const lego = document.getElementById("lego");
const damas = document.getElementById("damas");
const laberinto = document.getElementById("monopolio");
const resultado = document.getElementById("resultado");

let cantidadMonopolio =  monopolio.value;
let cantidadAjedrez = ajedrez.value;
let cantidadLego = lego.value;
let cantidadDamas = damas.value;
let cantidadLaberinto = laberinto.value;

let precioMonopolio = 70.99;
let precioAjedrez = 78.99;
let precioLego = 100.99;
let precioDamas = 58.50;
let precioLaberinto = 35.00;
//total de juguetes comprados 
let totaljuguetes = cantidadAjedrez + cantidadMonopolio + cantidadLaberinto + cantidadLego +cantidadDamas;

let costo = (cantidadMonopolio * precioMonopolio) + (cantidadAjedrez * precioAjedrez) + (cantidadLego * precioLego) + (cantidadDamas * precioDamas) + (cantidadLaberinto * precioLaberinto);

    let descuento=0;
    let importe=0;
    if (totaljuguetes < 10){
        descuento = costo * 0.035;   
        importe = costo - descuento;     
    }
    else if((totaljuguetes >= 10)&&(totaljuguetes<=20)){
        descuento = costo * 0.07;   
        importe = costo - descuento; 
    }
    else{
        descuento = costo * 0.095;   
        importe = costo - descuento;
    }
    resultado.innerHTML =  `
    <table>
    <thead>
        <th>Cantidad</th>
        <th>Descripción</th>
        <th>Valor Unitario</th>
        <th>Total</th>
    </thead>
    <tbody>
        <tr>
            <td>${cantidadMonopolio}</td>
            <td>Monopolio</td>
            <td>S/${precioMonopolio}</td>
            <td>S/${(cantidadMonopolio * precioMonopolio).toFixed(2)}</td>
        </tr>
        <tr>
            <td>${cantidadLaberinto}</td>
            <td>Laberinto</td>
            <td>S/${precioLaberinto}</td>
            <td>S/${(cantidadLaberinto * precioLaberinto).toFixed(2)}</td>
        </tr>
        <tr>
            <td>${cantidadAjedrez}</td>
            <td>Ajedrez</td>
            <td>S/${precioAjedrez}</td>
            <td>S/${(cantidadAjedrez * precioAjedrez).toFixed(2)}</td>
        </tr>
        <tr>
            <td>${cantidadDamas}</td>
            <td>Damas</td>
            <td>S/${precioDamas}</td>
            <td>S/${(cantidadDamas * precioDamas).toFixed(2)}</td>
        </tr>
        <tr>
            <td>${cantidadLego}</td>
            <td>Lego</td>
            <td>S/${precioLego}</td>
            <td>S/${(cantidadLego * precioLego).toFixed(2)}</td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td><h5>Sub Total</h5></td>
            <td><h5>S/${costo.toFixed(2)}</h5></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td><h5>Descuento</h5></td>
            <td><h5>S/${descuento.toFixed(2)}</h5></td>
        </tr>
        <tr>
        <td></td>
        <td></td>
        <td><h5>Total a pagar</h5></td>
        <td><h5>S/${importe.toFixed(2)}</h5></td>
    </tr>
    </tbody>
</table>  
`;
    
}
