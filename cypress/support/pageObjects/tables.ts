export const checkRowValuesTable = (name: string, ico: number, email: string, invoices: number) => {
  cy.contains('td', name)
    .siblings()
    .then($elements => {
      cy.wrap($elements).contains('td', ico)
      cy.wrap($elements).contains('td', email)
      cy.wrap($elements).contains('td', invoices)
    })
};

export const removeContact = () => {
  cy.get(".el-table").within(() => {
    cy.get(".icon-trash-can").first().click({force: true});
  });
  cy.get(".el-dialog__footer").within(() => {
    cy.get(".el-button").contains("Ano smazat").click();
  });
}

export const removeInovice = () => {
  cy.get(".navbar__content").within(() => {
    cy.get(".navbar-navigation__item").contains("Vystavené faktury").click();
  });
  cy.get(".el-table").within(() => {
    cy.get(".icon-trash-can").first().click({force: true});
  });
  cy.get(".el-dialog__footer").within(() => {
    cy.get(".el-button").contains("Ano smazat").click();
  });
}

export const createInvoiceFromContactTable = (name: string) => {
  cy.contains('td', name)
    .siblings()
    .then($elements => {
      cy.wrap($elements).get(".icon-new-invoice").first().click({force: true});
    })
}

export const sortDataInTabelDescending = () => {
  cy.get('.el-table__body').first().within(() => {
  cy.get('.el-table_1_column_1')
    .then(async ($el) => {
      const result = await Cypress._.map($el, "innerText").sort();
      cy.log(JSON.stringify(result));
      return result;
    })
    .as("sortedArray");
  })

  cy.get(".el-table__header-wrapper").within(() => {
    cy.get("tr")
      .eq(0)
      .within(() => {
        cy.get('.descending').first().click();
      });
  });

  cy.get("@sortedArray").then((sortedArray) => {
    cy.get('.el-table__body').first().within(() => {
    cy.get('.el-table_1_column_1')
      .then(($el) => {
        return Cypress._.map($el, "innerText").sort();
      })
      .should("deep.equal", sortedArray);
    })
  });
};
