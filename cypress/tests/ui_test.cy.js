describe('EliteA QA Agent UI Tests', () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env('baseURL')}`);

    cy.origin('https://auth.elitea.ai/realms/nexus/protocol/openid-connect/auth', () => {
      // Assert login form exists
      cy.pause();
      cy.get('#kc-form-login').should('be.visible'); // Replace with the correct selector
      cy.get('#username').type(Cypress.env('username')); // Login with username
      cy.get('#password').type(Cypress.env('password')); // Login with password
      // cy.get('#kc-login').click(); // Submit the login form
      cy.get('#social-epam').click();
      cy.pause();
      
    });
  });

  it('Validates QA Agent UI elements', () => {
    cy.get('#agentHeader').should('be.visible'); // Replace with selector for agent header
    cy.get('#inputBox').should('be.visible'); // Replace with selector for agent input box
    cy.get('#submitButton').should('be.visible'); // Replace with selector for submit button
  });
});