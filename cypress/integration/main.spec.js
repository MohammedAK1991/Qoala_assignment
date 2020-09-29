describe('Form', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('it focuses the input in the Main component on page load', () => {
    cy.focused().should('have.id', 'search')
  })
  it('accepts input', () => {
    const inputData = "Learn about Cypress"
    cy.get('input')
      .type(inputData)
      .should('have.value', inputData)
  })
  it('displays 6 ImageCards from each of the 3 collections on the first page load', () => {
    cy.get('.image-card')
      .should('have.length', 18)
  })
  it('returns images for a valid collection query from the search box', () => {
    const input = "cars"
    cy.get('input')
      .type(input)
      .type('{enter}')
      .get('.image-card')
      .should('have.length', 15)
  })
  it('returns a no images found message when invalid collection query is entered', () => {
    const input = "qwertyuipoiejf"
    cy.get('input')
      .type(input)
      .type('{enter}')
      .get('h1')
      .should('have.length', 1)
  })

})