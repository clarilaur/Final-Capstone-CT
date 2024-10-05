describe('loadAddUser', () => {
    
    it('passes', () => {
        
        cy.visit('https://thinking-tester-contact-list.herokuapp.com/')
        cy.get('#signup').click()
        cy.get('#firstName').type('Test', { delay: 100 })
        cy.get('#lastName').type('User', { delay: 100 })
        cy.get('#email').type('test@fake.po', { delay: 100 })
        cy.get('#password').type('myPassword', { delay: 100 })
        cy.wait(1000)
        cy.get('#submit').click()

    })
})