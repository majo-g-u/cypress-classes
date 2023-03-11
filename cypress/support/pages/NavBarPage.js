export class NavBarPage {
    constructor() {
        this.userInput = '#user';
    };

    returnUser(user) {
        return cy.get(`[id^=user_${user}_]`);
    };
}