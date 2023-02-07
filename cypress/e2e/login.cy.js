describe("Login user", () => {
    it('login test user', () => {
        cy.visit('/')
        cy.get('.fa-user').click()
        cy.get('.login__switch').click()
        cy.get('.cypress-login').type('test@test.com')
        cy.get('.cypress-password').type('123456')
        cy.get('.cypress-btn').click()
        cy.get('.cypress-modal-btn').click()
        cy.visit('/userHomePage/profile')

        // cy.get('.cypress-log-out').click()
    })
})