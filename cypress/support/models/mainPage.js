class MainPage {
    btnLoginHeader = () => cy.get('[data-analytics-id="header.login"]');
    btnLogin = () => cy.get('[data-analytics-id="button.login"]');

    inputEmail = () => cy.get('#email');
    inputPassword = () => cy.get('#current-password');

}

module.exports = new MainPage();