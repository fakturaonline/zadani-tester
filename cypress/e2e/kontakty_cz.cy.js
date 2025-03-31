import ContactsPage from '../support/pages/contacts_page';

beforeEach(() => {
  cy.session('userSession', () => {
    cy.login_cz(); // Provede login s uchováním session
  });
 });

describe('Contact page', () => {
  
  beforeEach(() => {
    // Přesměruje na stránku s kontakty
    cy.visitCz('/kontakty');

  });

  it('Otestuje vytvoření kontaktu pomocí názvu firmy', () => {
    // Ověření, že jsme na stránce s kontatky
    ContactsPage.verifyContactsPage();

    // Vytvoření kontaktu a ověření, že je přítomen
    cy.fixture('contacts.json').then((contactData) => {
      ContactsPage.createNewContact(contactData[1]);
    }); 
  });
  

  it('Otestuje vytvoření kontaktu pomocí IČO', () => {
    // Ověření, že jsme na stránce s kontatky
    ContactsPage.verifyContactsPage();

    // Vytvoření kontaktu a ověření, že je přítomen
    cy.fixture('../fixtures/contacts.json').then((contactData) => {
      ContactsPage.createNewContact(contactData[0]);
    });

  });

  it('Otestuje update stávajícího kontaktu', () => {
    // Ověření, že jsme na stránce s kontatky
    ContactsPage.verifyContactsPage();

    // Update kontaktu a ověření úspěšného updatu
    cy.fixture('contacts.json').then((contactData) => {
      ContactsPage.verifyUpdateContact(contactData[2]);
    }); 

  });

/*

  it('Otestuje výmaz stávajícího kontaktu', () => {
    // Ověření, že jsme na stránce s kontatky
    ContactsPage.verifyContactsPage();

    // Vytvoření kontaktu a ověření, že je přítomen
    cy.fixture('contacts.json').then((contactData) => {
      ContactsPage.deleteContact(contactData[0]);
    }); 

  });

  it('Otestuje obsah výpisu a řazení', () => { 
    ContactsPage.verifyContactsPage();
    const valuesToCheck = ['Alza.cz a.s.', 'FakturaOnline s.r.o.'];
    ContactsPage.verifyContactListContainsValues(valuesToCheck);

    cy.verifySorted('th[data-test*="name"] i[class*="ascending"]'', 'ascending'); // Ověření vzestupného řazení
    cy.get('#sort').click({ force: true });
    cy.wait(1000); // Počká 1000 milisekund (1 sekunda)
    cy.verifySorted('th[data-test*="name"] i[class*="descending"]', 'descending'); // Ověření vzestupného řazení
    cy.get('#sort').click({ force: true });
  });


    it('Ověří počet záznamů', () => {
      // Ověření, že jsme na stránce s kontatky
      ContactsPage.verifyContactsPage();
      // Ověření počtu záznamů
      cy.verifyElementCount('td[data-test*="name_column"]]', 2);

  });


   it('Zkontroluje výpis záznamů', () => {
      // Ověření, že jsme na stránce s kontatky
      ContactsPage.verifyItemsContainValues();

  });



*/

  after(() => {
    // Provede logout - POZOR, NUTNO DOPNIT LOGOUT
    cy.log('Všechny testy dokončeny');
  });


})