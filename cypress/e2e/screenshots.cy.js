/// <reference types="cypress" />

import { LoginPage } from '../support/pages/LoginPage'


describe('Actividad complementaria 7', () => {
    let loginData

    const loginPage = new LoginPage();


    before('Before', () => {
        cy.fixture("fixtureDataObjectModel").then(data => {
            loginData = data
        });
    });

    beforeEach("Actividad complementaria 7 ", () => {
        cy.visit('');
        cy.get("#registertoggle").dblclick();
    });

    //me quede en el minuto 25 del video de la clase 7
    it("Test should take a screenshot of full screen", () => {
        cy.screenshot({ capture: "fullPage" });
    });

    it("Take screenshot of button todolist", () => {
        loginPage.typeInUser(loginData.test1.user);
        loginPage.typeInPassword(loginData.test1.pass);
        loginPage.clickBtnLogIn();
        cy.get('#todolistlink').click();
    })
});