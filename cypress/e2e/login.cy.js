describe('login', () => {
    
    it('passes', () => {
        
        cy.visit('https://thinking-tester-contact-list.herokuapp.com/')
        cy.get('#email').type('riopip@gmail.com')
        cy.get('#password').type('Rio1234')
        cy.get('#submit').click()
  
    })
  })