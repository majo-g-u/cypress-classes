/// <reference types="cypress" />

import { LoginPage } from '../support/pages/LoginPage'
import { ToDoListPage } from '../support/pages/ToDoListPage'
import { NavBarPage } from '../support/pages/NavBarPage'


describe('Actividad complementaria 7', () => {
    let loginData
    //generar una instancia de la clase todoListPage
    const toDoListPage = new ToDoListPage();
    //generar una instancia de la clase loginPage t
    const loginPage = new LoginPage();
     //generar una instancia de la clase loginPage
     const navBarPage = new NavBarPage();

    before('Before', () => {
        cy.fixture("fixtureDataObjectModel").then(data => {
            loginData = data
        });
    });

    beforeEach("Actividad complementaria 6", () => {
        cy.visit('');
        cy.get("#registertoggle").dblclick();
        loginPage.typeInUser(loginData.test1.user);
        loginPage.typeInPassword(loginData.test1.pass);
        loginPage.clickBtnLogIn();
        navBarPage.returnUser(loginData.test1.user).should('include.text' , loginData.test1.user);
        cy.get('#todolistlink').click();
    });

    //me quede en el minuto 25 del video de la clase 7
    it("Test should take a screenshot of full screen", () => {
        navBarPage.returnUser(loginData.test1.user).should('include.text' , loginData.test1.user);
        cy.screenshot({capture:"fullPage"}); 
        navBarPage.returnUser(loginData.test1.user).screenshot('screenshot of navbar');

    });
});