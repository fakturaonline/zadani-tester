class ContactsPage {
  visit() {
    cy.visit('/#/contacts'); 
  }

  verifyContactsPage() { // Ověření, že vstupujeme na správnou stránku
    cy.url().should('include', 'kontakty');
    cy.get('button[data-analytics-id*="addContact"]').should('be.visible');
  }

  createNewContact(fixture) { // Vytvoření nového kontaktu
    cy.get('button[data-analytics-id*="addContact"]').click();
      
    cy.get('input[name="company_number"]').then(($input) => {
      if (fixture.ico && fixture.ico.trim() !== '') {
        cy.wrap($input).type(fixture.ico);
      } else {
        cy.wrap($input).clear();
      }
    });
      
    cy.get('input[type="tel"]').type(fixture.telefon);
    
    cy.get('input[name*="name"]').then(($input) => {
      if (fixture.jmeno && fixture.jmeno.trim() !== '') {
        cy.wrap($input).type(fixture.jmeno);
      } else {
        cy.wrap($input).clear();
      }
    });

    cy.get('button[data-analytics-id*="buttons.save"]').click();
  
    
    // Ověření úspěšného přidání
    cy.get('div[class*="success"]').should('be.visible');
         
    // Ověření údajů v detailu kontaktu
        //cy.get('td[data-test*="name_column"] span')
    //  .contains(`${fixture.jmeno}`, { timeout: 1000 })
    //  .click;
    //cy.get(`span:contains("${fixture.jmeno}")`).click();
    //cy.get('input[name="company_number"]', { timeout: 2000 }).invoke('val').should('equal', fixture.jmeno);
    //cy.get('input[name*="ico"]').should('have.value', fixture.ico);

  }

  verifyUpdateContact(fixture) { // Provede update kontaktu
    cy.get("button[data-analytics-id$='icon-pen']").first().click({ force: true }); 
    cy.get('input[type="tel"]').type(fixture.telefon);

    // Ověření úspěšného udpatu

    cy.get('div[class*="success"]').should('be.visible');
    cy.get(`span:contains("${fixture.jmeno}")`).click();

    cy.get('input[type="tel"]')
      .contains(`${fixture.telefon}`, { timeout: 1000 })
      .click;

 }

 verifyContactListContainsValues(values) { // Vyhledá položky podle lokátoru a zkontroluje
  const selector = 'th[data-test*="name"]';
  values.forEach(value => {
    cy.get(selector).should('contain', value);
  });
}

}

export default new ContactsPage();