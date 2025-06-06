import landingPageLocators from '../../core/pages/landingPage';

class LandingPage {
  selectProject(projectName) {
    cy.get(landingPageLocators.rootSection).should('be.visible');
    cy.get(landingPageLocators.projectSelect)
      .should('be.visible')
      .click();
    cy.get(landingPageLocators.projectItem)
      .should('be.visible')
      .click();
  }

  navigateToAgents(){
    cy.get(landingPageLocators.agentsButton)
      .should('be.visible')
      .click();
  }
}

export default new LandingPage();