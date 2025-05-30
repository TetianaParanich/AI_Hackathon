import { getAgents } from '../business/agents';

describe('QA Agents API Validation', () => {
  it('should retrieve QA agents information successfully', () => {
    const endpoint = Cypress.env('agentsPath');

    getAgents(endpoint).then((response) => {
      expect(response.status).to.eq(200, 'Status code should be 200');
      expect(response.body).to.be.an('array', 'Data field should be an array');
    });
  });

  it('should retrieve the agent by ID and validate the name is "Create Test Cases"', () => {
    const endpoint = Cypress.env('agentsPath');

    getAgents(endpoint).then((response) => {
      const agentId = 4;
      const agentName = 'Create Test Cases';
      const agent = response.body.find((item) => item.id === agentId);

      expect(agent, `Agent with ID ${agentId} should exist`).to.not.be.undefined;
      expect(agent.name).to.eq(agentName, `Agent's name should match ${agentName}`);
    });
  });
});