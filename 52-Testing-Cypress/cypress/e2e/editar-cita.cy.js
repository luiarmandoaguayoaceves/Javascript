/// <reference types="cypress" />

describe('Llenado de citas automatico y edita', () => {
    it('Llenar campos', () => {
        cy.visit('/index.html')

        cy.get('[data-cy="mascota-input"]')
            .type('kira')

        cy.get('[data-cy="propietario-input"]')
            .type('Luis Armando')
    
        cy.get('[data-cy="telefono-input"]')
            .type('3328358881')

        cy.get('[data-cy="fecha-input"]')
            .type('2023-12-05')

        cy.get('[data-cy="hora-input"]')
            .type('11:23')

        cy.get('[data-cy="sintomas-textarea"]')
            .type('Caída de cabello ')

        cy.get('[data-cy=submit-cita]')
            .click()

        //Seleccionar alerta
        cy.get('[data-cy=alerta]')
            .invoke('text')
            .should('equal', 'Se agregó correctamente')

        // Validar por clases
        cy.get('[data-cy=alerta]')
            .should('have.class', 'alert-success')

        cy.get('[data-cy=citas-heading]')
            .invoke('text')
            .should('equal', 'Administra tus Citas')
    });

    it('Editar campos', () => {
        cy.get('[data-cy=btn-editar]')
            .click();

        cy.get('[data-cy="mascota-input"]')
            .clear()
            .type('Loba')

        cy.get('[data-cy=submit-cita]')
            .click()

        //Validar por alerta
        cy.get('[data-cy=alerta]')
            .invoke('text')
            .should('equal', 'Guardado Correctamente')

        // Validar por clases
        cy.get('[data-cy=alerta]')
            .should('have.class', 'alert-success')

    });
})