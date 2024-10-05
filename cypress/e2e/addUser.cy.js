describe('addUser', () => {
    
    it('passes', () => {
        
        cy.visit('https://thinking-tester-contact-list.herokuapp.com/')
        cy.get('#signup').click()
        cy.get('#firstName').type('Test')
        cy.get('#lastName').type('User')
        cy.get('#email').type('test@fake.co')
        cy.get('#password').type('myPassword')
        cy.get('#submit').click()

    })
})