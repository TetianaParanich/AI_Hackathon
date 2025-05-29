// import { login } from '../business/auth';

describe('Login and check QA Agent', () => {
  it('Logs in and validates the presence of an agent', () => {
    const baseUrl = Cypress.env('baseURL');
    const username = Cypress.env('username');
    const password = Cypress.env('password');
    const qaAgentPath = Cypress.env('qaAgentPath');

    // Login API call
    cy.request({
      method: 'POST',
      url: `${baseUrl}/auth/login`, // Using baseURL from .env
      body: {
        username: username,
        password: password,
      },
    }).then((response) => {
      expect(response.status).to.eq(200); // Assert login success
      const token = response.body.token;
      expect(token).to.be.a('string');

      // Check QA Agent presence
      cy.request({
        method: 'GET',
        url: `${baseUrl}${qaAgentPath}`, // Compose full QA_AGENT_PATH
        headers: {
          Authorization: `Bearer ${token}`, // Pass auth token
        },
      }).then((agentResponse) => {
        expect(agentResponse.status).to.eq(200); // Assert valid response
        expect(agentResponse.body).to.have.property('agents'); // Check agents field
      });
    });
  });
});