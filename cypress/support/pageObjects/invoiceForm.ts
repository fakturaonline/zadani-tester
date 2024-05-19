interface Supplier {
  name: string;
  ico: number;
  phone: number;
  email: string;
  city: string;
  PSC: number;
}

export const createInvoice = () => {
  fillInBasicInfo();
  setSettings();
  filInSupplier();
  addInvoiceItem();
  cy.get(".form-actions").within(() => {
    cy.get(".el-button").contains("Vystavit a stáhnout").click();
  });
};

export const fillInBasicInfo = () => {
  cy.get("#invoice_issued_by").type("Veronika");
};

export const setSettings = () => {
  cy.get(".uploader--logo").within(() => {
    cy.get(".el-upload__input").first().invoke("show").selectFile("./cypress/fixtures/images/paw.jpeg");
  });
  cy.get(".el-button").contains("Nahrát bez oříznutí").invoke("show").click({ force: true });
};

export const filInSupplier = () => {
  cy.fixture<Supplier>("supplier.json").then((supplier) => {
    cy.get("#invoice_seller_attributes_company_number").type(String(supplier.ico));
    cy.get(":nth-child(2) > .el-form-item__content > .el-autocomplete > .el-input > .el-input__inner").type(
      supplier.name
    );
    cy.get("#invoice_seller_attributes_address_attributes_city").type(supplier.city);
    cy.get("#invoice_seller_attributes_address_attributes_postcode").type(String(supplier.PSC));
  });
};

export const addInvoiceItem = () => {
  cy.get(".el-col-xs-12.el-col-sm-8 > .el-form-item > .el-form-item__content > .el-input__inner").type("4999");
};
