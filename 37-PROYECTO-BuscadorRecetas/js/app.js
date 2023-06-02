function iniciarApp () {
    
    const seleccionarCategoria = document.querySelector('#categorias');
    seleccionarCategoria.addEventListener('change', selecionarCategoria);
    const resultado = document.querySelector('#resultado');
    const modal = new bootstrap.Modal('#modal', {});//Objeto de boostrap  para la ventana emergente modal


    obtenerCategoria();

    function obtenerCategoria () {
        const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';
        fetch (url)
            .then ( respuesta => respuesta.json())
            .then ( resultado => mostrarCategorias(resultado.categories))
    }

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
                seleccionarReceta(idMeal);
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
        console.log(receta);
        const { idMeal, strInstructions, strMeal, strMealThumb} = receta;

        const modalTitle = document.querySelector('.modal .modal-title');
        const modalBody = document.querySelector('.modal .modal-body');

        modalTitle.textContent = strMeal;
        modalBody.innerHTML = `
        <img class="img-fluid" src="${strMealThumb}" alt="receta ${strMeal}"/>
        <h3 class="my-3">Intrucciones</h3>
        <p>${strInstructions}</p>
        `
        modal.show()
    }

    function limpiarHTML (selector) {
        while(selector.firstChild){
            selector.removeChild(selector.firstChild)
        }
    }
}

document.addEventListener('DOMContentLoaded', iniciarApp);