/// <reference types="cypress" />
/// <reference types="cypress" />

import { LoginPage } from '../support/pages/LoginPage'
import { ToDoListPage } from '../support/pages/ToDoListPage'
import { NavBarPage } from '../support/pages/NavBarPage'


describe('Actividad complementaria 6', () => {
    let loginData
    //generar una instancia de la clase todoListPage
    const toDoListPage = new ToDoListPage();
    //generar una instancia de la clase loginPage
    const loginPage = new LoginPage();

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
        loginPage.returnUser(loginData.test1.user).should('include.text' , loginData.test1.user);
        cy.get('#todolistlink').click();
    });

    it("deberia verificar que los botones existen", () => {
         
    });
});