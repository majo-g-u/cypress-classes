export class ToDoListPage {
    constructor() {
        this.buttonAll = '#all';
        this.buttonCompleted = '#completed';
        this.buttonActive = '#active';
        this.buttonRemoveAll = '#removeAll';
    }

    returnButtonAll() {
        return cy.get(this.buttonAll);
    };
    returnButtonCompleted() {
        return cy.get(this.buttonCompleted);
    };

    returnButtonActive() {
        return cy.get(this.buttonActive);
    };

    returnButtonRemoveAll() {
        return cy.get(this.buttonRemoveAll);
    };

}