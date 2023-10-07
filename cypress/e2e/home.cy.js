/* eslint-disable no-undef */
describe('test home', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')
    cy.get('h1').should('contain', 'OpenFeedback')
  })
})
