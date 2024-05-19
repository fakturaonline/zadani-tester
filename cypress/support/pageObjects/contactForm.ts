interface UserContact {
  name: string;
  ico: number;
  phone: number;
  email: string;
  city: string;
  PSC: number;
}

export const fillInContactForm = () => {
  cy.fixture<UserContact>("userContact.json").then((userContact) => {
    cy.get('[name="invoice_attributes_name"]').type(userContact.name);
    cy.get('[name="company_number"]').type(String(userContact.ico));
    cy.get(".vti__input").type(String(userContact.phone));
    cy.wait(1000);
    cy.get("#invoice_attributes_email").type(userContact.email);
    cy.get("#invoice_attributes_address_attributes_city").type(userContact.city);
    cy.get("#invoice_attributes_address_attributes_postcode").type(String(userContact.PSC));
  });
};
