import landingPageLocators from '../../core/pages/landingPage';
import { getLongDelay } from '../../core/utils/cypressTools';

class LandingPage {
  selectProject() {
    cy.get(landingPageLocators.rootSection).should('be.visible');
    cy.get(landingPageLocators.projectSelect)
      .should('be.visible')
      .click();
    cy.get(landingPageLocators.projectItem)
      .should('be.visible')
      .click();
  }

  navigateToAgents(){
    cy.get(landingPageLocators.agentsButton, getLongDelay())
      .should('be.visible')
      .click();
  }
}

export default new LandingPage();