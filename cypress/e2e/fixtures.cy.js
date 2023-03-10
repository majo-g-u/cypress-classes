//crea un fixture con las siguientes keys 
//username (el username debe ser inexistente)
//pasword (la password debe ser valida)
//mensajeError (el mensaje de error lo tienes que copiar de la pagina )



//usa before para acceder al fixture y obtener los datos
//beforeEach para visitar la pagina y dirigirse al login

/// <reference types="cypress" />

describe('Actividad complementaria 4 / fixtures', () => {
    let loginData;

    //inicializa el fixture
    before('Before', () => {
        cy.fixture('fixtureData').then(data=>{
            loginData = data
        })
    })
    
    beforeEach('Before Each', () => {
        cy.visit('');
        cy.get('#registertoggle').dblclick();
    })

    it('Deberia validar un mensaje de error al colocar un usuario inexistente', () => {
        cy.get('#user').type(loginData.test1.user);
        cy.get('#pass').type(loginData.test1.pass); //la contraseña no debe contener ningun numero
        cy.get('#submitForm').click();
        cy.get('#errorMessage').should('have.text', loginData.error);
    });
});