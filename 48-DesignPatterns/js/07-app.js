// namespace

const restauranApp = []

restauranApp.platillos = [
    {
        platillo: 'Pizza',
        precio: 35
    },
    {
        platillo: 'Hamburguesa',
        precio: 25
    },
    {
        platillo: 'Hot Dog',
        precio: 20
    }
];

restauranApp.funciones = {
        mostrarMenu: platillos => {
            console.log(`Bienvenidos a nuestro menu`)

            platillos.forEach((platillo, index) => {
                console.log(`${index}: ${platillo.platillo} $${platillo.precio}`)
            }) ;
        },
        ordenar: id => {
            console.log(`Tu pedido: ${restauranApp.platillos[id].platillo} se esta preparando`);
        },
        agregarPlatillo: (platillo, precio) => {
            const nuevo = {
                platillo,
                precio
            };
            restauranApp.platillos.push(nuevo);
        }
}

   
restauranApp.funciones.agregarPlatillo('Lonche de jamon', 28)

restauranApp.funciones.ordenar(1);

const {platillos} = restauranApp;
restauranApp.funciones.mostrarMenu(platillos);