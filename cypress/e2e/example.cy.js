// https://docs.cypress.io/api/introduction/api.html

describe('Sanity Test', () => {
  it('visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'Crabi Calory')
  })
})
