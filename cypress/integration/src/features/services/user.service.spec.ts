describe('User service tests', () => {
  it('Should redirect to /login if getData fails with 401', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    });

    cy.intercept('GET', '/user/data', {
      statusCode: 401,
    }).as('getData');


    cy.visit('/');
    cy.get('input[id="username"]').type('Lena_00');
    cy.get('input[id="password"]').type('1234');
    cy.get('button').click();

  cy.wait('@getData').url().should('include', '/login');    

    

  });
});