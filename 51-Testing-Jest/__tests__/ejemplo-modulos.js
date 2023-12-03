import { suma } from "../js/funciones.js";

describe('Suma de dos numeros', () => {
    test('Suma de 10 y 20 debe dar 30', () => {
        expect( suma(10, 20)).toBe(30)
    })
})