export function mostrarAlerta (mensaje) {
    const alerta = document.querySelector('.bg-red-100');

    if(!alerta){
        const alerta = document.createElement('P');

        alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center');

        alerta.innerHTML = `
        <strong class="font-bold">Error!</strong>
        <span class="block sm:inline">${mensaje}</span>
        `;

        const formulario = document.querySelector('#formulario');
        formulario.appendChild(alerta)

        setTimeout(() => {
            alert.remove();
        }, 3000);
    }
}

//Validar
//!Se recomienda realizar de esta manera la validacion de los campos en un formulario
export function validacion (obj){
    return !Object.values(obj).every(input => input !== '');
}
