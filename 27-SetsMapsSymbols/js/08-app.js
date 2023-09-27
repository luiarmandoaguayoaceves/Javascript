const ciudades = ['Londres', 'New York', 'Madrid', 'Paris'];
const ordenes = new Set([123, 231, 312, 102]);
const datos = new Map();

datos.set('nombre','Luis Armando');
datos.set('profesion','Desarrollador Web');

//Default
for (const ciudad of ciudades) {
    console.log(ciudad);
}
for (let orden of ordenes) {
    console.log(orden);
}

for (let dato of datos) {
    console.log(dato);
}

//Keys Iteracion
for (let ciudad of ciudades.keys()) {
    console.log(ciudad);
}

for (let orden of ordenes.keys()) {
    console.log(orden);
}

for (let dato of datos.keys()) {
    console.log(dato);
}



//Values Iteracion
for (let ciudad of ciudades.values()) {
    console.log(ciudad);
}

for (let orden of ordenes.values()) {
    console.log(orden);
}

for (let dato of datos.values()) {
    console.log(dato);
}



//Entries Iteracion
for (let ciudad of ciudades.entries()) {
    console.log(ciudad);
}

for (let orden of ordenes.entries()) {
    console.log(orden);
}

for (let dato of datos.entries()) {
    console.log(dato);
}