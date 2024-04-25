import generalLib from '../support/lib/generalLib';
import contactsLib from '../support/lib/contactsLib';

import modelContacts from '../support/models/contacts';
import modelInvoices from '../support/models/invoice';

import { data } from '../fixtures/contacts_data';

const user = Cypress.env('user');

/**
 * TEST CASES TO COVER
 *
 * 1. Create Contact with suggestion
 * 2. Create Contact without suggestion
 * 3. Search for contact
 * 4. Delete Contact
 * 5. Edit Contact
 * 6. Sort Contact List
 * 7. Create new invoice for contact
 * 8. Create new preview for invoice contact
 * 9. Overview of invoices linked to the contact
 * 10. Correct sum of invoices for a contact
 * 11. Correct inforamtion in transaction overview
 * 12. Changes at information diplayed in transaction overview after filter changed
 * 13. Download all invoices in different formats
 * 14. Bulk action on invoices - mark as paid, mark as unpaid, download, delete
 * 15. Downlaood single invoice by name
 * 16. Sent invoice by mail
 * 17. Edit invoice
 * 18. Duplicate invoice
 * 19. Sort invoices
 * 20. Search for invoice - ID, Dodavatel
 * 21. Search for unpaid invoices by toggle filter btn
 * 22. Change displayed col information in table
 * ...
 * It's 1 part of the system, but it's connected to another parts and it creates huge chunk of possible testing scenarios
 * if you take into account positive and negative testing scenarios
 *
 * IMPLEMENTATION
 * POM - Page Object Model
 * Models - set as a class in model files - only selectors
 * Methods - Lib files
 * Lib is divided into Interface and implementation file
 * Interface describes functions and its params - Created by Test Architect or Senior Automation Specialist for any employee
 * Implementation file - implements desired function described in Interface files
 *
 * Used Test parametrisation -> For easy testing multiple domains/setups there is a way to iterate through "data" setups
 * and easily create same tests for mutiple domains e.x. line number 54.
 */

describe('TEST SUITE CONTACTS', () => {

    Object.values(data.domains).forEach((domain, i) => {
        describe(`Domain: ${domain.localization}`, () => {
            before(() => {
                generalLib.visitPage(domain.url);
                generalLib.login(user.email, user.password);
            });

            after(() => {
                generalLib.visitPage(domain.url);
                modelContacts.navbarItem(data.translation[i].navbarItem).click();
                contactsLib.deleteAllContacts();
            });

            describe('Contact', () => {
                beforeEach(() => {
                    generalLib.visitPage(domain.url);
                    modelContacts.navbarItem(data.translation[i].navbarItem).click();
                })

                it('Create new contact in empty contact list:', () => {
                    cy.intercept('POST', '/api/services/merk-suggestions').as('suggestion');

                    modelContacts.btnAddContactEmptyList().click();
                    modelContacts.inputCompanyName().type(data.translation[i].company);
                    cy.wait('@suggestion').then(() => {
                        modelContacts.suggestion().first().click();
                    });
                    modelContacts.inputIco().should('have.value', '02649659');
                    modelContacts.inputDic().should('have.value', 'CZ02649659');
                    modelContacts.inputEmail().should('have.value', 'sales@legito.com');
                    modelContacts.inputWeb().should('have.value', 'https://www.legito.com');
                    modelContacts.inputStreet().should('have.value', 'Pod Lipami 19, Zeměchy');
                    modelContacts.inputCity().should('have.value', 'Kralupy nad Vltavou');
                    modelContacts.inputPostalCode().should('have.value', '27801');
                    modelContacts.btnSave().click();
                    modelContacts.tableRow(data.translation[i].company).should('exist').and('be.visible');
                });

                it('Create new contact without suggestion:',() => {
                    modelContacts.btnAddContact().click();
                    contactsLib.addContact('QwertyComputer', generalLib.generateRandomNumericalString(8));
                    modelContacts.btnSave().click();
                    modelContacts.tableRow(data.translation[i].company).should('exist').and('be.visible');
                    modelContacts.tableRow('QwertyComputer').should('exist').and('be.visible');
                });

                it('Search in contacts:',() => {
                    modelContacts.searchboxContact().type(data.translation[i].company);
                    modelContacts.tableRow(data.translation[i].company).should('exist').and('be.visible');
                });
            });
        })
    });

});