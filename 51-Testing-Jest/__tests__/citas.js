import Citas from '../js/classes/Citas';

describe('Probar la clase de citas', () => {
   
    const citas = new Citas(); // de manera global para las demas pruebas
    const id = Date.now();

    test('Nueva Cita', () => {
        
        const citaObj = {
            id,
            mascota: 'Kira',
            propietario: 'Luis Armando',
            telefono: '3328358880',
            fecha: '01-12-2023',
            hora:'08:39',
            sintomas: 'Solo duerme'
        }

        citas.agregarCita(citaObj)// usar la funcion a probar

        //Prueba
        expect(citas).toMatchSnapshot();
    })

    test('Actualizar cita', () => {

        const citaActualizada = {
            id,
            mascota: 'Nuevo nombre',
            propietario: 'Luis Armando',
            telefono: '3328358880',
            fecha: '01-12-2023',
            hora:'08:39',
            sintomas: 'Solo duerme'
        }

        citas.editarCita(citaActualizada);

        expect(citas).toMatchSnapshot();

    })

    test('Eliminar citas', () => {
        citas.eliminarCita(id);
        expect(citas).toMatchSnapshot();
    })
})