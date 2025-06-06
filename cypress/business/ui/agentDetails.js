import agentDetailsPageLocators from '../../core/pages/agentDetailsPage';
import { getLongDelay } from '../../core/utils/cypressTools';

class AgentDetails {
  typePromtMessage(prompt) {
    cy.get(agentDetailsPageLocators.promtField)
      .should('be.visible')
      .scrollIntoView()
      .type(prompt, { force: true });
  }

  submitPromt() {
    cy.get(agentDetailsPageLocators.sendButton)
      .should('be.visible')
      .scrollIntoView()
      .click({ force: true });
  }

  openLastProcessStep(stepName) {
    this.getProcessStep('CreateTestCases');
    cy.get('span[class^="MuiTypography-root MuiTypography-bodyMedium css-dmsqlu"]')
      .contains(stepName)
      .last()
      .parents('button')
      .click();
  }

  getProcessStep(stepName) {
    return cy.get(agentDetailsPageLocators.processPane, getLongDelay())
      .contains(stepName);
  }

  getStepName() {
    return cy.get(agentDetailsPageLocators.processStep, getLongDelay());
  }

  getPromtResult(){
    return cy.get(agentDetailsPageLocators.agentsResponse, getLongDelay());
  }

  getFormattedTextInStep(){
    return cy.get(agentDetailsPageLocators.stepJQL, getLongDelay());
  }

  getDescriptionOfStory(){
    return cy.get(agentDetailsPageLocators.descriptionOfStory, getLongDelay());
  }
}

export default new AgentDetails();