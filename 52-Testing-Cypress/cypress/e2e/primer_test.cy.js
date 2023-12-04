/// <reference types="cypress" />

describe('Carga la pagina princupal', () => {
    it('Carga la pagina principal', () => {
        cy.visit('http://127.0.0.1:5500/52-Testing-Cypress/index.html')
        cy.contains('h1', 'Administrador de Pacientes de Veterinaria');

        cy.get('h1').should('exist');
    })
})