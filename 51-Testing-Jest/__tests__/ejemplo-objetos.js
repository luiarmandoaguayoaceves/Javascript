const cliente = {
    nombre: 'Luis Armando',
    balance: 500
}

describe('Testinde Cliente', () => {
    test('El cliente es premium', () => { 
        expect(cliente.balance).toBeGreaterThan(400);
     });
     test('El nombre es igual', () => {
        expect(cliente.nombre).toBe('Luis Armando')
     });

     test('No es otro cliente', () => {
        expect(cliente.nombre).not.toBe('Juan')
     });

     test('No tiene 500', () => {
        expect(cliente.balance).not.toBe(400)
     })
})