describe('updateContact', () => {
    
    it('passes', () => {
        
        cy.visit('https://thinking-tester-contact-list.herokuapp.com/')
        cy.get('#email').type('riopip@gmail.com')
        cy.get('#password').type('Rio1234')
        cy.get('#submit').click()
        cy.get('.contactTableBodyRow > :nth-child(2)').click()
//Editing contact fields:
        cy.get('#edit-contact').click()
        cy.get('#firstName').clear()
        cy.get('#lastName').clear()
        cy.get('#firstName').type('Rio')
        cy.get('#lastName').type('Pepito')

    })
})
