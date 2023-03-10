/// <reference types="cypress" />
describe("Actividad complementaria 1", () =>{
    const numero = Math.floor(Math.random() * 1000)
    it('Login success', () =>{
        cy.visit('');
        cy.get('#user').type('ddd' + numero);
        cy.get('#pass').type('123456!');
        cy.get("[value='Male']").check({force:true});
        cy.get('#day').select(5); //no se como seleccionar por el index
        cy.get('#month').select('August');
        cy.get('#year').select('1989');
        cy.get('#submitForm').click();
     });
});
// duda  - no deberia ser un IT por cada paso? asi es mas sencillo hacer skip y only?
