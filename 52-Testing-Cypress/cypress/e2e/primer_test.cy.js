/// <reference types="cypress" />

describe('Carga la pagina princupal', () => {
    it('Carga la pagina principal', () => {
        // cy.visit('http://127.0.0.1:5500/52-Testing-Cypress/index.html')
        cy.visit('/index.html')
       
        //! Verificar el elemento y su texto
        cy.contains('[data-cy="titulo-proyecto"]', 'Administrador de Pacientes de Veterinaria');

        // cy.get('h1').should('exist');
        //! Verificar que existe
        cy.get('[data-cy="titulo-proyecto"]').should('exist');

        //! verificar que exista yque tenga un texto en especifico
        cy.get('[data-cy="titulo-proyecto"]')
        .invoke('text')
        .should('equal', 'Administrador de Pacientes de Veterinaria');

        //! Verifica el texto de citas
        cy.get('[data-cy=citas-heading]')
        .invoke('text')
        .should('equal', 'No hay Citas, comienza creando una')

        cy.get('[data-cy=citas-heading]')
        .invoke('text')
        .should('not.equal', 'Luis Armando')
    })
})