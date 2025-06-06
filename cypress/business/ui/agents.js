import agentsPageLocators from '../../core/pages/agentsPage';

class AgentsPage {
  openQAAgent(){
    cy.get(agentsPageLocators.rootSection)
      .contains('span', 'QA Agent')
      .should('be.visible')
      .click();
  }
}

export default new AgentsPage();

