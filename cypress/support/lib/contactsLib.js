import IContactsLib from './interface/IContactsLib';
import contactsModel from '../models/contacts';
import modelContacts from "../models/contacts";

//TODO: Add phoneNUmberAttrToData
class ContactsLib extends IContactsLib {

    setCountry(countryName, countryCode = null) {
        contactsModel.listBoxCountry().click();
        contactsModel.dropdownCountryName().should('exist').and('be.visible');
        contactsModel.listOptionCountryName('countryName').click();
        contactsModel.listBoxCountry().should('have.text', countryName);
        countryCode ? contactsModel.listBoxCountryCode().should('have.text', countryName) : {};
    }

    addContact(
        name,
        ico = null,
        dic = null,
        phoneNumber = null,
        email = null,
        web = null,
        street = null,
        city = null,
        postalCode = null,
        country = null
    ){
        contactsModel.inputCompanyName().type(name);
        ico ? contactsModel.inputIco().type(ico) : {};
        dic ? contactsModel.inputDic().type(dic) : {};
        phoneNumber ? contactsModel.inputPhoneNumber('Telefon').type(phoneNumber) : {};
        email ? contactsModel.inputEmail().type(email) : {};
        web ? contactsModel.inputWeb().type(web) : {};
        street ? contactsModel.inputStreet().type(street) : {};
        city ? contactsModel.inputCity().type(city) : {};
        postalCode ? contactsModel.inputPostalCode().type(postalCode) : {};
        country ? this.setCountry(country) : {};
    }

    deleteAllContacts() {
        modelContacts.btnDeleteTableRow().each((row) => {
            cy.wrap(row).click({force:true});
            modelContacts.btnConfirmAction().click();
        });
    }
}

module.exports = new ContactsLib();