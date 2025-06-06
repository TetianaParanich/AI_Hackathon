import agentsPageLocators from '../../core/pages/agentsPage';
import { getLongDelay } from '../../core/utils/cypressTools';

class AgentsPage {
  openQAAgent(){
    cy.get(agentsPageLocators.rootSection, getLongDelay())
      .contains('span', 'QA Agent')
      .should('be.visible')
      .click();
  }
}

export default new AgentsPage();
