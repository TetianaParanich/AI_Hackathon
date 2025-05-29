export const apiRequest = (method, endpoint, payload = {}, headers = {}) => {
  return cy.request({
    method: method,
    url: Cypress.env('apiBaseUrl') + endpoint,
    body: payload,
    headers: headers,
    // failOnStatusCode: false, // Prevent Cypress from throwing errors on non-200 responses
  });
};