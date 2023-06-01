document.addEventListener('DOMContentLoaded', () => {
     
     //Definir objeto
     const datosFormulario = {
          email: '',
          cc: '',
          asunto: '',
          mensaje: ''
     };

     //Asignar a una variable las etiquetas a usar
     const inputEmail = document.querySelector('#email');
     const inputAsunto = document.querySelector('#asunto');
     const inputMensaje = document.querySelector('#mensaje');
     const inputCc = document.querySelector('#cc');
     const formulario = document.querySelector('#formulario');
     const btnEnviar = document.querySelector('#formulario button[type="submit"]');
     const btnReset = document.querySelector('#formulario button[type="reset"]');
     const spinner = document.querySelector('#spinner');
     

     //Generar Eventos 
     inputEmail.addEventListener('input', validar);
     inputAsunto.addEventListener('input', validar);
     inputMensaje.addEventListener('input', validar);
     inputCc.addEventListener('input', validar);
     btnReset.addEventListener('click', formateo);
     formulario.addEventListener('submit', enviarFormulario)
     
     /**********************************************
      ************   FUNCIONES    ******************
     *********************************************/

     //Eliminar datos del objeteo al borrar
     function formateo (e){
          e.preventDefault();
          resetFormulario();
     };

     //Envio de formulario hace modificaciones con DOM
     function enviarFormulario(e){
          e.preventDefault();
          spinner.classList.add('flex');
          spinner.classList.remove('hidden');

          setTimeout(() => {
               spinner.classList.remove('flex');
               spinner.classList.add('hidden');
               resetFormulario();

               //Mensaje de Exito
               const msjExito = document.createElement('P');
               msjExito.classList.add('bg-green-500', 'text-white', 'p-2', 'text-center', 'rounded-lg', 'mt-10', 'font-bold', 'text-sm', 'uppercase');
               msjExito.textContent = 'Mensaje enviado correctamente';
               formulario.appendChild(msjExito);

               setTimeout(() => {
                    msjExito.remove();
               }, 3000);
          }, 3000);
     }

     //Validacion por campo 
     function validar(e) {
          if (e.target.value.trim() === '') {
               mostrarError(`El campo ${e.target.id} es obligatorio`, e.target.parentElement)
               datosFormulario[e.target.id] = '';
               camposVacios();
               return;
          }
          if (e.target.id === 'email' && !validarEmail(e.target.value)) {
               mostrarError(`El email no es valido`, e.target.parentElement)
               datosFormulario[e.target.id] = '';
               camposVacios();
               return;
          }

          if (e.target.id === 'cc' && !validarEmail(e.target.value)) {
               mostrarError(`El email no es valido`, e.target.parentElement)
               datosFormulario[e.target.id] = '';
               camposVacios();
               return;
          }
          limpiarAlerta(e.target.parentElement)
          datosFormulario[e.target.id] = e.target.value.trim().toLowerCase();
          camposVacios();
          console.log(datosFormulario);
     }

     //Crear alerta para cuando el campo esta vacio
     function mostrarError(mensaje, ruta) {
          limpiarAlerta(ruta);

          const error = document.createElement('P');
          error.textContent = mensaje;
          error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center');
          ruta.appendChild(error);
     }

     // Eliminar alerta para no duplicar
     function limpiarAlerta(ruta) {
          const eliminarAlerta = ruta.querySelector('.bg-red-600')
          if (eliminarAlerta) {
               eliminarAlerta.remove();
          }
     }

     //Validar que tengas el formato de correo
     function validarEmail(email) {
          const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
          const resultado = regex.test(email);
          return resultado;
     }

     //Validar que los campos no esten vacios
     function camposVacios() {
          if (Object.values(datosFormulario).includes('')) {
               btnEnviar.classList.add('opacity-50');
               btnEnviar.disabled = true;
               return;
          }
          btnEnviar.classList.remove('opacity-50');
          btnEnviar.disabled = false;
     }

     //Limpiar datos del objeto
     function resetFormulario(){
          //limpiar el arreglo
          datosFormulario.email='';
          datosFormulario.cc='';
          datosFormulario.asunto='';
          datosFormulario.mensaje='';
          
          formulario.reset();
          camposVacios();
     }
});

