module.exports = class IContactsLib {

    /**
     * Set country name to select
     * @param countryName
     */
    setCountry(countryName) {}

    /**
     * Create contact based on params given
     * @param name
     * @param ico
     * @param dic
     * @param phoneNumber
     * @param email
     * @param web
     * @param street
     * @param city
     * @param postalCode
     * @param country
     */
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
    ){}

    /**
     * Fucntion deletes all contacts at /kontakty page
     */
    deleteAllContacts() {
    }

}