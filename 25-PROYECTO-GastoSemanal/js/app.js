//Variables

const formulario = document.querySelector('#agregar-gasto')
const cajaDeGastos = document.querySelector('#gastos ul')

//Eventos

eventListener();
function eventListener(){
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);
    
    formulario.addEventListener('submit', validarCampos )
}
//Clases

class Presupuesto{
    constructor(presupuesto){
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];
    }

    nuevoGasto(gasto){
        this.gastos = [...this.gastos, gasto]
        this.calcularRestante();
    }
    calcularRestante(){
        const gastado = this.gastos.reduce( (total, gasto) => total + gasto.cantidad, 0);
        this.restante = this.presupuesto - gastado;
    }
    borrarCompra(id){
        this.gastos = this.gastos.filter(gasto => gasto.id !== id);  
        this.calcularRestante();
    };

}

class UI{
    insertarPresupuesto(cantidad){
        console.log(cantidad);
        const {presupuesto, restante} = cantidad;
        document.querySelector('#total').textContent = presupuesto;
        document.querySelector('#restante').textContent = restante;

    }

    mensajeAlerta(mensaje, tipo){
        const div = document.createElement('DIV')
        div.classList.add('text-center', 'alert');
        if (tipo === 'error') {
            div.classList.add('alert-danger');
        }else{
            div.classList.add('alert-success');
        }
        div.textContent = mensaje;

        document.querySelector('.primario').insertBefore(div, formulario);

        setTimeout(() => {
            div.remove();
        }, 3000);
    }

    modificarGasto(gastos){

        this.limpiarHTML()

        //Iterar sogre el gasto
        gastos.forEach( gastar =>{

            const {gasto, cantidad, id} = gastar
            //Crear el Li
            const li = document.createElement('LI')
            li.className = 'list-group-item d-flex justify-content-between align-item-center';
            li.dataset.id = id;
            
            //Agregar HTML del gasto

            li.innerHTML = `${gasto} <span class="badge badge-primary badge-pill">$ ${cantidad} </span>`
            
            //Boton para borrar el gasto
            const btnBorrar = document.createElement('button');
            btnBorrar.classList.add('btn', 'btn-danger', 'borrar-gasto');
            btnBorrar.innerHTML = 'Borrar &times'
            btnBorrar.onclick= () => {
                borrarCompra(id);
            };
            li.appendChild(btnBorrar);
            //Agregar al HTML

            cajaDeGastos.appendChild(li);
        });
    };
    limpiarHTML(){
        while(cajaDeGastos.firstChild)
            cajaDeGastos.removeChild(cajaDeGastos.firstElementChild)
    }
    actualizarRestante(restante){
        document.querySelector('#restante').textContent = restante;
    }
    comprobarPresupuesto(presupuestoObj){
        const {presupuesto, restante} = presupuestoObj;
        const restanteDiv = document.querySelector('.restante')

        if ((presupuesto/4) > restante) {
            restanteDiv.classList.remove('alert-succes', 'alert-warning')
            restanteDiv.classList.add('alert-danger')
        }else if((presupuesto/2) > restante){
            restanteDiv.classList.remove('alert-succes')
            restanteDiv.classList.add('alert-warning')
        }else{
            restanteDiv.classList.remove('alert-danger', 'alert-warning')
            restanteDiv.classList.add('alert-succes')
        }

        if(restante <= 0){
            ui.mensajeAlerta('Los fondos se han terminado', 'error')
            formulario.querySelector('button[type="submit"]').disabled = true;
        }else{
            formulario.querySelector('button[type="submit"]').disabled = false;
        }

    }
}

//Insatanciar
const ui = new UI();
let presupuesto;

//Funciones

function preguntarPresupuesto(){
    const presupuestoUsuario = prompt('¿Cual es tu presupuesto?')

    if(presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0){
        window.location.reload();
    }
    presupuesto = new Presupuesto(presupuestoUsuario)
    console.log(presupuesto);
    ui.insertarPresupuesto(presupuesto);
}
function validarCampos(e){
    e.preventDefault();
    const gasto = document.querySelector('#gasto').value;
    const cantidad = Number(document.querySelector('#cantidad').value);

    if (gasto === '' || cantidad === '') {
        ui.mensajeAlerta('Los campos estan vacion', 'error')
        return;
    }else if(cantidad <= 0 || isNaN(cantidad)){
        ui.mensajeAlerta('Cantidad no valida', 'error');
        return;
    }

    const registroGasto = {gasto, cantidad, id: Date.now()};
    presupuesto.nuevoGasto(registroGasto);

    //impimir alerta
    ui.mensajeAlerta('Gasto agregado correctamente');


    //Agregar gastos HTML
    const {gastos, restante} = presupuesto
    ui.modificarGasto(gastos)
    ui.actualizarRestante(restante);
    ui.comprobarPresupuesto(presupuesto);



    //formatear formulario
    formulario.reset();
}

function borrarCompra(id){
    presupuesto.borrarCompra(id);

    //Elimina los gastos del HTML
    const {gastos, restante} = presupuesto
    ui.modificarGasto(gastos)
    ui.actualizarRestante(restante);
    ui.comprobarPresupuesto(presupuesto);
};