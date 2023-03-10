/// <reference types="cypress" />

describe('Actividad complementaria 5', () => {
    const timeout = 10000;

    beforeEach("Prcondiciones", () => {
        cy.visit('');
        cy.get("#registertoggle").dblclick()
        cy.get('#user').type('pushingit')
        cy.get('#pass').type('123456!')
        cy.get('#submitForm').click()
        cy.get(`[id*='user_pushingit']`).should('exist')
        cy.get('#waitslink').click()
        cy.get('button#wait').dblclick()
    })

    it('Deberia validar que el boton vuelva a llamarse Button', () => {
        // Verificar que el boton 'cargando' su texto vuelva a ser 'button'. ('have.text')
        cy.get('button[id=wait]', { timeout }).should('have.text', 'Button');
    });

    it("Deberia validar un elemento con text 'Wait 5 more seconds", () => {
        // verificar que exista un elemento cuyo texto sea 'Wait 5 more seconds' ('have.text')
        cy.get('p[id=colorChangeMessage]', { timeout }).should('have.text', 'Wait 5 more seconds');
    });

    it.only("Deberia validar que cambie el mensaje", () => {
        // Verificar que el primer mensaje que aparece a los 10 sec luego de 5 sec mas sea diferente. (que cambie el mensaje) ('have.text') 2 lineas de codigo

        /* cy.get('p[name="message"]', { timeout }).should('have.text', 'You have waited for ten seconds, CONGRATULATIONS');
        cy.get('p[name="message"]', { timeout }).should('have.text', 'You are a man of patience and have waited fifteen seconds'); */

        cy.get('p[name="message"]').invoke('text').then(texto => {
            expect (texto).is.equal('You have waited for ten seconds, CONGRATULATIONS')
        })      
    });
})
