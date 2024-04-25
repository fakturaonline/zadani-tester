class Contacts {
    navbarItem = (name) => cy.contains('.navbar-navigation__item', name);
    suggestion = () => cy.get('.el-autocomplete-suggestion');
    inputCompanyName = () => cy.get('[name="invoice_attributes_name"]');
    inputIco = () => cy.get('#invoice_attributes_company_number');
    inputDic = () => cy.get('#invoice_attributes_tax_number');
    inputPhoneNumber = (phoneNumberNameAttr) => cy.contains('.el-form-item', phoneNumberNameAttr).find('input');
    inputEmail = () => cy.get('#invoice_attributes_email');
    inputWeb = () => cy.get('#invoice_attributes_web');
    inputStreet = () => cy.get('#invoice_attributes_address_attributes_street');
    inputCity = () => cy.get('#invoice_attributes_address_attributes_city');
    inputPostalCode = () => cy.get('#invoice_attributes_address_attributes_postcode');


    listBoxCountryCode = () => {};
    searchboxContact = () => cy.get('[name="search"]');
    searchboxCountry = () => this.dropdownCountryCodes().find('input');
    listOptionCountryName = (countryName) => cy.contains('.el-select-dropdown__item', countryName);
    listOptionCountryCodes = (option) => cy.contains('.vti__dropdown-item', option);
    listBoxCountry = () => cy.get('#invoice_contact_attributes_address_attributes_country_code');
    dropdownCountryName = () => cy.get('.el-select-dropdown');
    dropdownCountryCodes = () => cy.get('.vti__dropdown-list')

    btnAddContactEmptyList = () => cy.get('[data-analytics-id="contactsTable.emptyContacts.button"]');
    btnAddContact = () => cy.get('[data-analytics-id="contactsTable.buttons.addContact"]');
    btnSave = () => cy.get('[data-analytics-id="contacts.buttons.save"]');
    btnBack = () => cy.get('[data-analytics-id="contacts.buttons.back"]');
    btnDeleteTableRowByName = (name) => this.tableRow(name).find('[data-analytics-id="icon-trash-can"]');
    btnDeleteTableRow = (name) => cy.get('.el-table__row').find('[data-analytics-id="icon-trash-can"]').filter(':visible');

    btnConfirmAction = () => cy.get('[data-analytics-id="confirmButtonTitle"]');
    btnEditTableRow = (name) => this.tableRow(name).find('[data-analytics-id="icon-edit"]');
    btnNewInvoiceTableRow = (name) => this.tableRow(name).find('[data-analytics-id="icon-new-invoice"]');
    btnSort = (sortValue) => cy.contains('.cell', sortValue);

    tableRow = (name) => cy.contains('.el-table__row', name);

}

module.exports = new Contacts();