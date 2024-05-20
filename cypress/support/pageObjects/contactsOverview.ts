import { fillInContactForm } from "./contactForm";
import { faker } from "@faker-js/faker";

const fullName = faker.person.fullName();
const phone = faker.phone.number();
const email = faker.internet.email();
const ico = faker.number.octal({ min: 20_000, max: 50_000 });

export const createContact = () => {
  cy.get(".table-heading").within(() => {
    cy.get(".el-button").contains("Přidat kontakt").click();
  });
  cy.get("form").within(() => {
    fillInContactForm();
    cy.get("button").contains("Uložit změny").click();
  });
};

export const editContact = (newName: string) => {
  cy.get("a").contains("Jana Kantoj").click();
  cy.get('[name="invoice_attributes_name"]').clear().type(newName);
  cy.get("button").contains("Uložit změny").click();
  cy.get(".el-table_1_column_1").contains(newName);
};

export const checkContactSummaryMessage = (message) => {
  cy.get(".footer__invoices-info").scrollIntoView().contains(message);
};

export const createRandomContact = () => {
  cy.get(".table-heading").within(() => {
    cy.get(".el-button").contains("Přidat kontakt").click();
  });
  cy.get("form").within(() => {
    cy.get('[name="invoice_attributes_name"]').type(fullName);
    cy.get('.el-form-item__label').first().click();
    cy.get('[name="company_number"]').type(ico);
    cy.get(".vti__input").type(phone);
    cy.get("#invoice_attributes_email").type(email);
    cy.get("button").contains("Uložit změny").click();
  });
};
