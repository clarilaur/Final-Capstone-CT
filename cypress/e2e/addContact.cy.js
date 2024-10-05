describe('addContact', () => {
    
    it('passes', () => {
        
        cy.visit('https://thinking-tester-contact-list.herokuapp.com/')
        cy.get('#email').type('riopip@gmail.com')
        cy.get('#password').type('Rio1234')
        cy.get('#submit').click()
        cy.get('#add-contact').click()
//Adding the details for the new contact
        cy.get('#firstName').type('John')
        cy.get('#lastName').type('Doe')
        cy.get('#birthdate').type('1970-01-01')
        cy.get('#phone').type('jdoe@fake.net')
        cy.get('#street1').type('8005555555')
        cy.get('#street2').type('1 Main St.')
        cy.get('#city').type('Apartment A')
        cy.get('#stateProvince').type('Anytown')
        cy.get('#postalCode').type('KS')
        cy.get('#country').type('12343')
        cy.get('#email').type('USA')
        cy.get('#submit').click()

    })
})