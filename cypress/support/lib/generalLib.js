import IGeneralLib from './interface/IGeneralLib';
import mainPage from '../models/mainPage';

class GeneralLib extends IGeneralLib{
    login(email, password) {
        cy.intercept('POST','/api/subscriptions/sign_in').as('login');

        mainPage.btnLoginHeader().click();
        mainPage.inputEmail().type(email);
        mainPage.inputPassword().type(password);
        mainPage.btnLogin().click();
        cy.wait('@login').then((interception) => {
            expect(interception.response.statusCode).to.eq(200);
        });
    }

    visitPage(domain) {
        cy.visit(domain);
    }

    generateRandomNumericalString(length) {
        const numbers = '0123456789';
        let number = '';

        for (let i = 0; i < length; i++) {
            number += numbers[Math.floor(Math.random() * 10)]
        }

        return number;
    }
}

module.exports = new GeneralLib();