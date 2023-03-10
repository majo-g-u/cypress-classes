//todos los selectores deben ser modificados y utilizar una expresion diferente ya sea con
//css selector o con un metodo de cypress

/// <reference types="cypress" />
describe("first challenge", () =>{
    const numero = Math.floor(Math.random() * 1000)
    it('first challenge', () =>{
        cy.visit('https://pushing-front.vercel.app/');
        //cy.get('#user').type(`pushingit${numero}`); 
        cy.get('[id="user"]').type(`pushingit${numero}`); 
        //cy.get('[name="user"]').clear()
        cy.get('input[class="chakra-input css-1ekf6i8"]').clear();
        //cy.get('input#user').type(`pushingit${numero}`);
        cy.get('form').find('[name="user"]').type(`pushingit${numero}`);
        //cy.get('input.password').type('123456!');
        cy.get('form').find('#pass').type('123456!');
        //cy.get("input[class = 'chakra-radio__input']").check({force:true})
        cy.get('fieldset').find('[value="Male"]').check({force:true});
        //cy.get('select#day').select('20')
        cy.contains('Day of birth').siblings('div').children('[name="day"]').select('6');
        //cy.get('select#month').select('September')
        cy.get('select[name="month"]').select('September')
        //cy.get('select#year').select(10)
        cy.contains('Year').siblings('div').children('[name="year"]').select('1989');
        cy.get('button').contains('Register').click();
        //cy.wait(5000)
        cy.get('#todolistlink').click();
        cy.get('[name="task"]').type('NewTask A1');
        cy.get('[name="task"]').siblings('button[type="submit"]').click();
        cy.get('ul[class="css-194xn47"]').find('li').contains('NewTask A1').click();
    });
});

