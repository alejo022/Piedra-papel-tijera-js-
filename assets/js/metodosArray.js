/* Aplicación de metodos en un Array de frutas */

console.log("Se crea array de frutas y se aplican metodos")

var frutas = ["Manzana","Pera","Mango"];

/* Con el  push agregamos un elemento al final del array */
var AddFinal = frutas.push("Uvas");
console.log(frutas);

/* con el pop Va eliminar elemento en el array */
var EliminarFrutaFinal = frutas.pop("Uvas");
console.log(frutas);

/* Con el  unshift agregamos un elemento al inicio del array */
var AddInicio = frutas.unshift("Uvas");
console.log(frutas);

/* con el shift Va eliminar el primer elemento en el array */
var EliminarFrutaInicio = frutas.shift("Uvas");
console.log(frutas);

/* Bucar posicion de un elemento en especifico */
var posicion = frutas.indexOf("Pera");
console.log(posicion);

/* ......................................................................................................................... */



/* Función Saludar estudiantes que se encuentran en un Array */

console.log("Se crea array de personas y se les manda un saludo")

var Estudiantes = ["Santiago","Alejandro","Federico","Firulais"];

/* Función para saludar estudiante */
function SaludarEstudiante(Estudiante) {
    console.log(`hola, ${Estudiante}`);
}

/* Imprimir cada estudiante que se enuentra en el Array y Saludarlo */
console.log(Estudiantes);

console.log("saludando desde un bucle")
for(var i=0; i<Estudiantes.length;i++) {
    SaludarEstudiante(Estudiantes[i]);
}

console.log("saludando desde un ciclo con of")
for(var estudiante of Estudiantes){
    SaludarEstudiante(estudiante);
}

console.log("saludando desde un while con shift")
while(Estudiantes.length > 0){
    console.log(Estudiantes);
    var estudiante = Estudiantes.shift();
    SaludarEstudiante(estudiante);
}

/* ........................................................................................................................... */



/* Un array con objetos - metodos filter - map - mtodos de recorrido */

var articulos = [
    {nombre: "Libro1", costo: 20},
    {nombre: "Libro2", costo: 35},
    {nombre: "Libro3", costo: 45},
    {nombre: "Libro4", costo: 55},
    {nombre: "Libro5", costo: 65},
    {nombre: "Libro6", costo: 85},
    {nombre: "Libro7", costo: 95},
];

console.log(articulos);


/* Metodo Filter() */
var FiltrarArticulo = articulos.filter(function(articulo){
    return articulo.costo < 40
});

console.log(FiltrarArticulo);

/* Metodo Map() */
var nombreArticulo = articulos.map(function(articulo){
    return articulo.nombre
});

console.log(nombreArticulo)


/* Metodo find() - metodo validación */
var encontrarArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Libro1"
 });

console.log(encontrarArticulo);


/* Metodo foreach() - para recorrer el array */
var recorrerArray = articulos

articulos.forEach(function(articulo){
    console.log(articulo.nombre)    
})


/* Metodo Some() - nos reguesa validacion verdadero o false para el que la cumple */
var ArticulosBarato = articulos.some(function(articulo){
    return articulo.costo <=50
});

console.log(ArticulosBarato);