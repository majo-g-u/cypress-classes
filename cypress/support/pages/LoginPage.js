export class LoginPage {
    constructor() {
        this.userInput = '#user';
        this.passInput = '#pass';
        this.loginButton = '#submitForm';
    };

    typeInUser(user) {
        cy.get(this.userInput).type(user);
    };

    typeInPassword(password) {
        cy.get(this.passInput).type(password);
    };

    clickBtnLogIn(){
    cy.get(this.loginButton).click();
    }

   
    returnUser(user) {
        return cy.get(`[id^=user_${user}_]`);
    };
}