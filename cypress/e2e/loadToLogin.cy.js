describe('loadtoLogin', () => {
    
    it('passes', () => {
        
        cy.visit('https://thinking-tester-contact-list.herokuapp.com/')
        
        cy.get('#email').type('riopip@gmail.com', { delay: 100 })
        cy.get('#password').type('Rio1234', { delay: 100 })
        cy.wait(1000)
        cy.get('#submit').click()

    })
})