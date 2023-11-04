//New Binding

function Auto (modelo, color){
    this.modelo = modelo,
    this.color = color
}

const auto = new Auto('Camaro', 'Negro')

console.log(auto);

// Window binding
window.color = 'Negro'
function hola (){
    console.log(color);
}

hola();