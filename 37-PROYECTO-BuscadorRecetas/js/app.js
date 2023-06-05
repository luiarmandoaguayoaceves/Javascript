function iniciarApp () {
    
    //Variables
    const resultado = document.querySelector('#resultado');
    const seleccionarCategoria = document.querySelector('#categorias');
    if (seleccionarCategoria) {
        seleccionarCategoria.addEventListener('change', selecionarCategoria);
        //llamar funcion
        obtenerCategoria();
    }

    const favoritosDiv = document.querySelector('.favoritos');
    if (favoritosDiv) {
        obtenerFavoritos();
    }
    const modal = new bootstrap.Modal('#modal', {});//Objeto de boostrap  para la ventana emergente modal


    //funcion para mandar a llamas la API en formato JSON
    function obtenerCategoria () {
        const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';
        fetch (url)
            .then ( respuesta => respuesta.json())
            .then ( resultado => mostrarCategorias(resultado.categories))
    }
    
    // funcion para 
    function mostrarCategorias ( categorias  = []) {
        categorias.forEach(categoria => {

            const { strCategory } = categoria
            const opcion = document.createElement('OPTION');
            opcion.value = strCategory;
            opcion.textContent = strCategory;
            seleccionarCategoria.appendChild(opcion);
        });
    }

    function selecionarCategoria (e){
    const categoria =  e.target.value;
        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoria}`
        fetch (url)
        .then ( respuesta => respuesta.json())
        .then ( resultado => mostrarRecetas(resultado.meals)) 
    } 

    function mostrarRecetas ( recetas = [] ){
        limpiarHTML(resultado)

        const heading = document.createElement('H2');
        heading.classList.add('text-center', 'text-black', 'my-5');
        heading.textContent = recetas.length ? 'Resultados' : 'No Hay Resultados'
        resultado.appendChild(heading);
        
        recetas.forEach(receta => {
            const {idMeal, strMeal, strMealThumb} = receta
    
            const recetaContenedor = document.createElement('DIV');
            recetaContenedor.classList.add('col-md-4');
    
            const recetaCard = document.createElement('DIV');
            recetaCard.classList.add('card', 'mb-4');
    
            const recetaImagen = document.createElement('IMG');
            recetaImagen.classList.add('card-img-top');
            recetaImagen.alt = `Imagen de la receta ${strMeal}`;
            recetaImagen.src = strMealThumb;

            const recetaBody = document.createElement('DIV');
            recetaBody.classList.add('card-body');

            const recetaHeading = document.createElement('H3');
            recetaHeading.classList.add('card-title', 'mb-3');
            recetaHeading.textContent = strMeal;

            const recetaButton = document.createElement('BUTTON');
            recetaButton.classList.add('btn', 'btn-danger', 'w-100');
            recetaButton.textContent = 'Ver Receta';
            // recetaButton.dataset.bsTarget = "#modal";
            // recetaButton.dataset.bs.Toggle = "modal";
            recetaButton.onclick = function () {
                seleccionarReceta(idMeal ?? receta.id);
            }

            recetaBody.appendChild(recetaHeading);
            recetaBody.appendChild(recetaButton);
            recetaCard.appendChild(recetaImagen);
            recetaCard.appendChild(recetaBody);
            recetaContenedor.appendChild(recetaCard);
            resultado.appendChild(recetaContenedor);
        })
    }

    function seleccionarReceta (id) {
        const url = `https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        fetch (url) 
        .then ( respuesta => respuesta.json())
        .then ( resultado => mostrarRecetaModal(resultado.meals[0]));
    }

    function mostrarRecetaModal ( receta ) {
        const { idMeal, strInstructions, strMeal, strMealThumb} = receta;

        const modalTitle = document.querySelector('.modal .modal-title');
        const modalBody = document.querySelector('.modal .modal-body');

        modalTitle.textContent = strMeal;
        modalBody.innerHTML = `
        <img class="img-fluid" src="${strMealThumb}" alt="receta ${strMeal}"/>
        <h3 class="my-3">Intrucciones</h3>
        <p>${strInstructions}</p>
        <h3 class="my-3"> Ingredientes y Cantidades</h3>
        `;

        const listGroup = document.createElement('UL');
        listGroup.classList.add('list-group');

        //Mostrar cantidades e ingredientes
        for(let i = 0; i <= 20; i++){
            if(receta[`strIngredient${i}`]){
                const ingrediente = receta[`strIngredient${i}`];
                const cantidad = receta[`strMeasure${i}`];
                const ingredinteLi = document.createElement('LI');
                ingredinteLi.classList.add('list-group-item');
                ingredinteLi.textContent = `${ingrediente} - ${cantidad}`;
                listGroup.appendChild(ingredinteLi);
            }
        }

        modalBody.appendChild(listGroup);
        const modalFooter = document.querySelector('.modal-footer');
        limpiarHTML(modalFooter);

        const btnFavorito = document.createElement('BUTTON');
        btnFavorito.classList.add('btn', 'btn-danger', 'col');
        btnFavorito.textContent = existeStorage(idMeal) ? 'Eliminar Favorito' : 'Guardar Favorito';

        //LocalStorage
        btnFavorito.onclick = function () {
            if(existeStorage(idMeal)){
                eliminarFavorito(idMeal);
                btnFavorito.textContent = 'Guardar Favorito';
                mostratToast('Eliminado Correctamente');
                return
            }
            
            agregarFavorito({
                id: idMeal,
                strMeal,
                strMealThumb
            });
            btnFavorito.textContent = 'Eliminar Favorito';
            mostratToast('Agregado Correctamente');


        }

        const btnCerrarModal = document.createElement('BUTTON');
        btnCerrarModal.classList.add('btn', 'btn-secondary', 'col');
        btnCerrarModal.textContent = 'Cerrar';
        btnCerrarModal.onclick = function () {
            modal.hide();
        }

        modalFooter.appendChild(btnFavorito);
        modalFooter.appendChild(btnCerrarModal);



        //Muestra el modal
        modal.show()
    }

    function agregarFavorito (receta) {
        //Agregando a localStorage y se convierten a un arreglo JSON y en caso de que no exista que cree un arreglo vacio 
        const favoritos = JSON.parse( localStorage.getItem( 'favoritos' ) ) ?? [];
        localStorage.setItem( 'favoritos', JSON.stringify( [...favoritos, receta] ) );
    }

    function eliminarFavorito (id) {
        const favoritos = JSON.parse( localStorage.getItem( 'favoritos' ) ) ?? [];
        const nuevosFavoritos = favoritos.filter(favoritos => favoritos.id !== id);
        localStorage.setItem( 'favoritos', JSON.stringify(nuevosFavoritos));
    }

    function existeStorage (id) {
        const favoritos = JSON.parse( localStorage.getItem( 'favoritos' ) ) ?? [];
        return favoritos.some( favoritos => favoritos.id === id);
    } 

    function mostratToast (mensaje) {
        const toastDiv = document.querySelector('#toast');
        const toastBody = document.querySelector('.toast-body');
        const toast = new bootstrap.Toast(toastDiv);
        toastBody.textContent = mensaje;
        toast.show();
    }

    function obtenerFavoritos () {
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? [];
        if (favoritos.length) {
            mostrarRecetas(favoritos);
            return
        }

        const noFavoritos = document.createElement('P');
        noFavoritos.textContent = 'No hay Favoritos aun';
        noFavoritos.classList.add('fs-4', 'text-center', 'font-bold', 'mt-5')
        favoritosDiv.appendChild(noFavoritos);
    }

    function limpiarHTML (selector) {
        while(selector.firstChild){
            selector.removeChild(selector.firstChild)
        }
    }
}

document.addEventListener('DOMContentLoaded', iniciarApp);