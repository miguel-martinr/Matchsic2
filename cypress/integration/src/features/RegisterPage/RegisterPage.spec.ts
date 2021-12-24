const registerPagePath = 'http://localhost:3000/register';

describe('When I visit register page', () => {
  
  beforeEach(() => {
    cy.visit(registerPagePath);
  })
  
  it('It should show me a \'Name\' input with a placeholder', () => {
    cy.get('input[id="name"]').should('have.attr', 'placeholder', 'Tu nombre');
  });

  it('It should show me an username input with a placeholder', () => {
    cy.get('input[id="username"]').should('have.attr', 'placeholder', 'Nombre de usuario');
  });

  it('It should show me an email input with a placeholder', () => {
    cy.get('input[id="email"]').should('have.attr', 'placeholder', 'Correo electrónico');
  });

  it('It should show me a password input with a placeholder', () => {
    cy.get('input[id="password"]').should('have.attr', 'placeholder', 'Contraseña');
  });

  it('It should show me a password confirmation input with a placeholder', () => {
    cy.get('input[id="passwordConfirm"]').should('have.attr', 'placeholder', 'Repite la contraseña');
  });

  it('It should show me a button with text', () => {
    cy.get('button').should('have.text', 'Registrarme');
  });

});
