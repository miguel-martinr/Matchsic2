
const loginPagePath = '/login';


describe('When I visit login page', () => {
  
  beforeEach(() => {
    cy.visit(loginPagePath);
  })
  
  it('It should show me an username input with a placeholder', () => {
    cy.get('input[id="username"]').should('have.attr', 'placeholder', 'Nombre de usuario');
  });

  it('It should show me a password input with a placeholder', () => {
    cy.get('input[id="password"]').should('have.attr', 'placeholder', 'Contraseña');
  });

  it('It should show me a button with text', () => {
    cy.get('button').should('have.text', 'Entrar');
  });

  it('It should show me a register link', () => {
    cy.get('a').should('have.text', 'Registrarme').should('have.attr', 'href', '/register');
  });
});


describe('When I click the login button', () => {
  beforeEach(() => {
    cy.visit(loginPagePath);
  });

  it('It should show invalid feedback if there is not an username', () => {
    cy.get('#loginButton').click();
    cy.get('#usernameInputGroup .invalid-feedback').should('have.text', 'Completa este campo');
  });

  it('After that, it should remove invalid feedback if there IS an username', () => {
    cy.get('input[id="username"]').type('test');
    cy.get('#usernameInputGroup .invalid-feedback').should('be.hidden');
  });

  it('It should show invalid feedback if there is not a password', () => {
    cy.get('#loginButton').click();
    cy.get('#passwordInputGroup .invalid-feedback').should('have.text', 'Completa este campo');
  });

  it('After that, it should remove invalid feedback if there IS a password', () => {
    cy.get('input[id="password"]').type('test');
    cy.get('#passwordInputGroup .invalid-feedback').should('be.hidden');
  });

  // It should go to homePage (url: /home)
});
