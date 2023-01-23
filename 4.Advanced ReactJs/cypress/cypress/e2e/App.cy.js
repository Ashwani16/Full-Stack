describe('template spec', () => {
  
  beforeEach(()=>{
    cy.visit('http://localhost:3000/')
  })
  it('should have auto focus on Input tag',()=>{
 
    cy.get('.input').then(($el) => {
      Cypress.dom.isFocused($el)
    })
  })
  it('value should be udate by entring text in input tag',()=>{
    cy.get('.input').type('Hello World')
    cy.get('h1').should('have.text','Hello World')
  })
})