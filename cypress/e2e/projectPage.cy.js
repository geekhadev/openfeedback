/* eslint-disable no-undef */
describe('page projects', () => {
  it('passes', () => {
    cy.visit('/projects/23')

    cy.get('button').should('contain', 'Ver Demo')
    cy.get('button').should('contain', 'Hechale un vistazo al portafolio de')
    cy.get('img').should('have.attr', 'alt', 'project image')

    cy.get('img').first().click()

    cy.get('.modal').should('be.visible')

    cy.get('.modal').find('button').click()
  })
})
