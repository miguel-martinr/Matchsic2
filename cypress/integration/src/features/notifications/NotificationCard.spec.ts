
const notificationsPagePath = '/notifications';

describe('When I go to notifications page and there are no notifications', () => {

  it('There is a message indicating there is no notifications', () => {
    cy.visit(notificationsPagePath);
    cy.get('#noNotificationsMessage').should('have.text', 'No hay ninguna notificación');
  });
});

describe('When I go to notifications page and there is 1 notification', () => {

  it('Inside that notification I should be able to see the profile picture of the sender', () => {
    cy.visit(notificationsPagePath);
    const profilePictureUrl = 'https://i.pinimg.com/originals/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg';
    cy.get('#notification0 img').should('has.attr', 'src', profilePictureUrl);
  });

  it('Inside that notification I should be able to see the username of the sender', () => {
    cy.visit(notificationsPagePath);
    cy.get('#notification0 #senderUsername').should('have.text', 'Lena_00');
  });

  it('The username of the sender should be an anchor that links to that user\'s profile', () => {
    cy.visit(notificationsPagePath);
    const senderProfileUrl = 'sender/profile.com';
    cy.get('#notification0 #senderUsername').should('have.attr', 'href', senderProfileUrl);
  });

  it('The notification should have a short message or description', () => {
    cy.visit(notificationsPagePath);
    const shortMessage = 'Hola, ¿Alguna playlist que me recomiendes?';
    cy.get('#notification0 #description').should('have.text', shortMessage);
  });

  it('The notification should have a short message or description', () => {
    cy.visit(notificationsPagePath);
    const shortMessage = 'Hola, ¿Alguna playlist que me recomiendes?';
    cy.get('#notification0 #description').should('have.text', shortMessage);
  });


  it('The notification should have a "Go to map" button that takes me to the location where sender created the notification', () => {
    cy.visit(notificationsPagePath);
    const goToMapButton = cy.get('#notification0 #goToMapButton');
    goToMapButton.should('have.text', 'Ir al mapa');
    goToMapButton.click();

    const pageWithTheMapPath = 'http://localhost:3000/home';
    cy.location('pathname').should('eq', pageWithTheMapPath);
    // TODO: Assert current location is on the notification's assigned location
  });

  // TODO: test 'poke back' button
});