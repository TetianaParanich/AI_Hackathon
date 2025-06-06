import Login from '../business/ui/login';
import Landing from '../business/ui/landing';
import Agents from '../business/ui/agents';
import AgentDetails from '../business/ui/agentDetails';

const username = 'at_tetiana_paranich@elitea.ai';
const password = Cypress.env('password');
const projectName = 'Iwomm';
const jiraId = 'EPMCTEDUB-15';

describe('EliteA QA Agent UI Tests', () => {
  beforeEach('Login and navigate to QA agent', () => {
    cy.viewport(1920, 1080);
    Login.login(username, password);
    Landing.selectProject(projectName);
    Landing.navigateToAgents();
    Agents.openQAAgent();
  });

  it('Ensure the agent correctly follows the step-by-step instructions from understanding the chat history to task completion', () => {
    const steps = [
      'httpsjiraeu_epam_com',
      'Insurance-EISKnowledge',
      'CreateTestCases'
    ];
    const resultWords = [
      'Test Case ID',
      'Steps, Expected Results, and Actual Results'
    ];

    AgentDetails.typePromtMessage(jiraId);
    AgentDetails.submitPromt();
    AgentDetails.getProcessStep('Thinking step').should('be.visible');
    steps.forEach(step => {
      AgentDetails.getStepName().should('contain', step);
    });
    resultWords.forEach(keyword => {
      AgentDetails.getPromtResult().should('be.visible').and('contain.text', keyword);
    });
  });

  it('Validate that the agent retrieves and processes JIRA Story details correctly', () => {
    const step = 'httpsjiraeu_epam_com';
    const jiraDescription = 'As a pet owner,\\r\\n\\r\\nI want to be able to schedule grooming appointments for my pet at the hotel,\\r\\n\\r\\nSo that my pet can receive on-site grooming services during their stay.';

    AgentDetails.typePromtMessage(jiraId);
    AgentDetails.submitPromt();
    AgentDetails.openLastProcessStep(step);
    AgentDetails.getFormattedTextInStep().should('be.visible').and('contain.text', `"id=${jiraId}"`);
    AgentDetails.getDescriptionOfStory()
      .should('be.visible')
      .invoke('text')
      .then(text => {
        expect(text).to.include(jiraDescription);
      });
  });

  it('Ensure the agent extracts keywords from the JIRA story description accurately', () => {
    const step = 'Insurance-EISKnowledge';
    const relevantKeywords = [
      'schedule',
      'grooming',
      'appointments',
      'on-site',
      'grooming services',
    ];

    AgentDetails.typePromtMessage(jiraId);
    AgentDetails.submitPromt();
    AgentDetails.openLastProcessStep(step);
    relevantKeywords.forEach(keyword => {
      AgentDetails.getFormattedTextInStep()
        .should('be.visible')
        .and('contain.text', keyword);
    });
    relevantKeywords.forEach(keyword => {
      AgentDetails.getPromtResult().should('be.visible').and('contain.text', keyword);
    });
  });

  it.only('Ensure the agent gracefully handles errors in different stages of the task flow', () => {
    const invalidJiraId = 'EPMCTEDUB-XYZ';
    const errorMessage = 'It appears that the JIRA ID \'EPMCTEDUB-XYZ\' is invalid.';
    
    AgentDetails.typePromtMessage(invalidJiraId);
    AgentDetails.submitPromt();
    AgentDetails.getPromtResult()
      .should('be.visible')
      .and('contain.text', errorMessage);
  
  });
});