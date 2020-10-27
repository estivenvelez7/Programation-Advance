// alert('Abre la consola para ver los resultados');
// Caso 1
// Mostrar en consola articulos y precios
let articles = ["Zapatos", "Tenis", "Camisetas", "Jeans"];
let priceArticles = [350000, 280000, 175000, 200000];
let item1 = "Los " + articles[0] + ' Tienen un valor de ' + priceArticles[0];
let item2 = "Los " + articles[1] + ' Tienen un valor de ' + priceArticles[1];
let item3 = "Los " + articles[2] + ' Tienen un valor de ' + priceArticles[2];
let item4 = "Los " + articles[3] + ' Tienen un valor de ' + priceArticles[3];

let totalitem = [item1,item2,item3,item4];
console.log(totalitem.toString());

//Costo total de los articulos, más el promedio de ventas

let costoTotal = priceArticles[0]+priceArticles[1]+priceArticles[2]+priceArticles[3];
let promedio = costoTotal / priceArticles.length;

console.log("El valor total de todos los productos es: $" + costoTotal + ", y el promedio de ventas es: $" + promedio);

//Subir precio de los jeans en un 6.2% y disminuir el de los zapatos en un 0.8%

let nuevoprecioJeans = (priceArticles[3] * 6.2) / 100 + priceArticles[3];
let nuevoprecioZapatos =  priceArticles[0] - (priceArticles[0] * 0.8) / 100 ;

console.log("El precio de los jeans con aumento es de: $" + nuevoprecioJeans);
console.log("El precio de los zapatos con decremento es de: $" + nuevoprecioZapatos);


//Caso 2
let TipoA = 20000;
let TipoB = 10000;
let ContratoDif = 5000;
 
//Mostrar por consola el valor de la hora día
let datoingresado = prompt("0 para TipoA, 1 para Tipo B, 2 para contrato diferente");

if( datoingresado == 0){
    datoingresado = TipoA;
    console.log("Valor dia contrato Tipo A es de: $" + TipoA);
}
else if( datoingresado == 1){
    datoingresado = TipoB;
    console.log("Valor dia contrato Tipo B es de: $" + TipoB); 
}
else {
    datoingresado = ContratoDif;
    console.log ("Valor dia contrato diferente es de: $" + ContratoDif);   
}

//Calcular el sueldo mensual

let sueldomensual = (datoingresado * 8) * 30 ;

console.log("Sueldo Mensual: $" + sueldomensual);

if (sueldomensual > 1500000) {
    console.log("Salario es mayor a tope máximo");
}
else if(sueldomensual < 1500000){
    let valorhoraextra = (datoingresado * 6) / 100 + datoingresado;
    let nuevosueldo = (valorhoraextra*3) + sueldomensual;
    console.log("Valor hora extra: $" + valorhoraextra);
    console.log("Nuevo sueldo mensual: $" + nuevosueldo);
}

//nuevo comentario 



