const cliente = {
    nombre: 'Luis Armando',
    balance: 500,
    tipo: 'Premium'
}

describe('Testing a cliente con snapshot', () => {
    test('Es Luis Armando', () => {
        expect(cliente).toMatchSnapshot();
    })
})