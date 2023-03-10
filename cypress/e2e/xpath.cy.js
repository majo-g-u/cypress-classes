/// <reference types="cypress" />
describe("Actividad complementaria 3", () =>{
	// instalar la dependencia cypress-xpath
  // remplazar todos los selectores 'cssSelectors' por expresiones xpath
  // recorda usar el metodo cy.xpath y agregar la dependencia en el archivo e2e.
    it('Actividad complementaria 3', () =>{
        cy.visit('');
        cy.contains('Iniciá sesión').dblclick();
        cy.xpath('//input[contains(@id,"us")]').type(`pushingit`);
        cy.xpath('//input[starts-with(@id,"pass")]').type('123456!');
        cy.xpath('//button[contains(text(),"Log")]').click();
        cy.xpath('//p//child::a[@id="todolistlink"]').click();
        cy.xpath('//form//descendant::input[@name="task"]').type("tarea 1");
        cy.xpath('//input//following-sibling::button[@type="submit"]').click();
        cy.xpath('//p//parent::div[@class="css-vuy1kp"]').click();
    });
});

