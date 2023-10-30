( function() {
    document.addEventListener('DOMContentLoaded', () => {
        //! Estas dos lineas van de la mano para tomar el ID de la URL en el navegador
        const parametrosURL = new URLSearchParams(window.location.search);  //? <-- esta linea permite tomar la URL 
        const idCliente = parseInt(parametrosURL.get('id')) //? <-- pero esta tiene la url y toma el valor que diga 'id' 

        console.log(idCliente);
    })
})();