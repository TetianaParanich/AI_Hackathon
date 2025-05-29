Cypress.Commands.add('login', (username, password) => {
  // Replace the selectors with your application's actual CSS IDs/classes
  cy.get('#username').type(username);
  cy.get('#password').type(password);
  cy.get('#kc-login').click();
});

// Navigate to the QA Agent page with predefined path
Cypress.Commands.add('navigateToAgent', () => {
  cy.visit(Cypress.env('BASE_URL') + Cypress.env('QA_AGENT_PATH'));
});