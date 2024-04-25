class Invoice {
    invoiceType = () => cy.get('[name="kind"]');
    invoiceTypeDropdown = (listItem) => cy.contains('.el-select-dropdown', listItem);
    dropdownItem = (name) => cy.contains('.el-select-dropdown__item', name);
    inputNumber = () => cy.get('[name="number"]');
    inputRegistrationNumber = () => cy.get('[name="registration_number"]')
    inputInvoiceAuthor = () => cy.get('#invoice_issued_by');
    inputInvoiceDate = (inputDateType) => cy.contains('.el-form-item', inputDateType);
    inputInvoiceCreationDate = (inputName) => this.inputInvoiceDate().find('input');
    inputInvoiceFulfillmentDate = (inputName) => this.inputInvoiceDate().find('input');
    inputDueIn = () => cy.get('[name="due_in"]');
    inputBankAccountNumber = () => cy.get('#invoice_seller_attributes_bank_account_attributes_number');
    uploadWrapper = (name) => cy.contains('.upload-wrapper', name);
    inputUploadLogo = (wrapperName) => this.uploadWrapper(wrapperName).find('[data-analytics-id="button.uploadNew"]');
    inputInvoiceSeller = () => cy.get('[id="invoice_seller_attributes_company_number"]');
    inputInvoicedCompany = () => cy.get('[name="invoice_attributes_name"]');
    inputInvoicePrice = () => cy.contains('.el-form-item', 'Cena').find('input');
    textareaInvoiceDescription = () => cy.get('.el-textarea').first();

    btnSendEmail = () => cy.get('[data-analytics-id="submitInvoiceForm.buttons.confirm"]');
    btnInvoicePreview = () => cy.get('[data-analytics-id="form.invoiceForm.buttons.preview"]');
    btnSendByEmail= () => cy.get('[data-analytics-id="form.invoiceForm.buttons.send_by_email"]');
    btnSave = () => cy.get('[data-analytics-id="form.invoiceForm.buttons.save"]');

    btnSaveAndDownload = () => cy.get('data-analytics-id="form.invoiceForm.buttons.download"');


}

module.exports = new Invoice();