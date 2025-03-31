  Cypress.Commands.add('visitOnDomain', (args, domain = Cypress.env('currentDomain')) => {
    const customVisitCommand = `visit${domain.charAt(0).toUpperCase()}${domain.slice(1)}`;
    cy[customVisitCommand](args);
  });

  Cypress.Commands.add('visitCz', (args) => {
    cy.visit(`https://dev.fakturaonline.cz${args}`);
  });

  Cypress.Commands.add('visitCom', (args) => {
    cy.visit(`https://dev.invoiceonline.com${args}`);
  });

  Cypress.Commands.add('visitSk', (args) => {
    cy.visit(`https://dev.fakturaonline.sk${args}`);
  });

  Cypress.Commands.add('login_cz', () => {
    cy.visit('https://dev.fakturaonline.cz'); 
    cy.get('button[data-analytics-id*="login"]').click();
    cy.get('button[data-analytics-id*="v2.login"]').click();
    cy.get('input[name=email]').type(Cypress.env('username'));
    cy.get('input[name=password]').type(Cypress.env('password'));
    cy.get('button[data-analytics-id*="button.login"]').click();
    cy.url({ timeout: 4000 }).should('include', '/faktura');
  });

  
  Cypress.Commands.add('verifySorted', (selector, order = 'ascending') => {
    // Získání textů všech položek
    cy.get(selector)
      .then(($elements) => {
        const texts = [...$elements].map((el) => el.innerText);
  
        // Seřazení dle pořadí
        let sortedTexts;
        if (order === 'descending') {
          sortedTexts = [...texts].sort().reverse(); // Seřazení sestupně
        } else {
          sortedTexts = [...texts].sort(); // Seřazení vzestupně
        }
  
        // Ověření, že seznam je správně seřazen
        expect(texts).to.deep.equal(sortedTexts);
      });
  });


  Cypress.Commands.add('verifyItemsContainValues', (selector, values) => {
    // Získání textů všech položek
    cy.get(selector)
      .then(($elements) => {
        // Mapování na texty
        const texts = [...$elements].map((el) => el.innerText);
  
        // Ověření, že každý z hodnot je obsažen v textu
        values.forEach((value) => {
          expect(texts).to.include(value); // Ověří, že text obsahuje hodnotu
        });
      });
  });