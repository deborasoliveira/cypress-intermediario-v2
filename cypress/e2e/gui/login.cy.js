describe('Login', () => {
  it('successfully', () => {
    cy.login()
    cy.get('[data-qa-selector="user_menu"]').should('be.visible')
  })
})