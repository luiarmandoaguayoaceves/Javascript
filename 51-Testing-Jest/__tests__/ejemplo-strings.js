
const password = '123456';

describe ('Validar que el pas2word no este vacio y tenga un extencion de 6 caracteres', () => {
    test('Que el pasword  tenga 6 caracteres', () => {
        expect( password ).toHaveLength(6);
    });

    test('Password no vacio', () => {
        expect( password ).not.toHaveLength(0);
    });
})