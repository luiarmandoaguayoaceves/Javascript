//Funcion comun 
const aprediendo = function (tecnologia1, tecnologia2) {
    console.log(`Aprendiendo ${tecnologia1} y ${tecnologia2}`);
}
aprediendo('javascript', 'Node.JS');

//Funcion con arrow function pero con 1 parametro
const aprediendo2 = tecnologia1 => `Aprendiendo ${tecnologia1}`;
console.log(aprediendo2('Javascript'));


//Function con Arrow function pero con 2 parametros
const aprediendo3 = (tecnologia1, tecnologia2) => `Aprendiendo ${tecnologia1} y ${tecnologia2}`;
console.log(aprediendo3('Javascript', 'Node.JS'));