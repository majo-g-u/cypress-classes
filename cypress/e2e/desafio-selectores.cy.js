//todos los selectores deben ser modificados y utilizar una expresion diferente ya sea con
//css selector o con un metodo de cypress

/// <reference types="cypress" />
describe("Actividad complementaria 2", () =>{
    const numero = Math.floor(Math.random() * 1000)
    it('Actividad complementaria 2', () =>{
        cy.visit('https://pushing-front.vercel.app/');
        //cy.get('#user').type(`pushingit${numero}`); 
        cy.get('[id="user"]').type(`pushingit${numero}`); 
        //cy.get('[name="user"]').clear()
        cy.get('input[class="chakra-input css-1ekf6i8"]').clear()
        //cy.get('input#user').type(`pushingit${numero}`);
        cy.get('form').find('[name="user"]').type(`pushingit${numero}`);
        //cy.get('input.password').type('123456!');
        cy.get('form').find('#pass').type('123456!');
        //cy.get("input[class = 'chakra-radio__input']").check({force:true})
        cy.get('fieldset').find('[value="Male"]').check({force:true})
        //cy.get('select#day').select('20')
        cy.contains('Day of birth').siblings('div').children('[name="day"]').select('6')
        //cy.get('select#month').select('September')
        cy.get('select[name="month"]').select('September')
        //cy.get('select#year').select(10)
        cy.contains('Year').siblings('div').children('[name="year"]').select('1989')
        cy.get('button').contains('Register').click()
        cy.wait(5000)
    });
});




/* //todos los selectores deben ser modificados y utilizar una expresion diferente ya sea con
//css selector o con un metodo de cypress

/// <reference types="cypress" />
describe("Actividad complementaria 2", () =>{
    const numero = Math.floor(Math.random() * 10000)
    it('Actividad complementaria 2', () =>{
        cy.visit('https://pushing-front.vercel.app/');
        cy.get('[class="chakra-input css-1ekf6i8"]').type(`pushingit${numero}`).should('exist'); // select by attribute
        cy.get('[class="chakra-input css-1ekf6i8"]').clear()
        cy.get('[class="chakra-input css-1ekf6i8"]').type(`pushingit${numero}`);
        cy.get('form').find('[type="password"]').type('123456!').should('exist'); //select with .find method
        //cy.get('input[value="Male"]').parent('label').should('exist'); // method parent could not make it work
        cy.get("[value='Male']").check({force:true});
        cy.get('select[name="day"]').children('[value="20"]').should('exist');// used .children method
        //this fails when I attempt to find by VALUE
        //cy.get('select#month').contains('[value="8"]').should('exist'); //used contains method
        cy.get('select[name="month"]').contains('September').should('exist'); //used .contains method
        cy.get('[value="2008"]').parent('select#year').should('exist'); //used .parent method
        cy.get('button#submitForm').contains("Register").click(); //used .contains method
        cy.wait(5000)
    });
}); */