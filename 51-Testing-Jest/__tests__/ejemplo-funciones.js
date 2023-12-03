function suma (a, b) {
    return a + b;
}

function resta (a, b) {
    return a - b;
}

describe('Testing a las funciones de suma y resta', () => {
    test('Suma de 20 y 30', () => { 
        expect( suma(20,30)).toBe(50)
     })

     test('Resta de 30 - 20', () => { 
        expect( resta(30,20)).toBe(10)
     })

     test('Que la suma de 10 + 10 no sea 10', () => { 
        expect( suma(10,10)).not.toBe(50)
     })

     test('Que la resta de 10 - 10 no sea 10', () => { 
        expect( resta(30,20)).not.toBe(5)
     })
})