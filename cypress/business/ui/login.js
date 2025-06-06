import loginPageLocators from '../../core/pages/loginPage';

class Login {
  login(username, password) {
    cy.visit(`${Cypress.env('baseURL')}`);
    cy.origin(
      `${Cypress.env('authURL')}`,
      { args: { locators: loginPageLocators, username, password } },
      ({ locators, username, password }) => {
        cy.get(locators.loginForm).should('be.visible');
        cy.get(locators.usernameField)
          .should('be.visible')
          .type(username)
          .should('have.value', username);
        cy.get(locators.passwordField)
          .should('be.visible')
          .type(password)
          .should('have.value', password);
        cy.get(locators.loginButton).should('be.visible').click();
      }
    );
  }
}

export default new Login();
