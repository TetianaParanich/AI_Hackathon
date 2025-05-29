// Loads custom commands (if defined in `commands.js`):
import '../core/support/commands'; // Import 'cypress/support/commands.js'

// You can add beforeEach or afterEach hooks globally here if needed:
Cypress.on('uncaught:exception', (err, runnable) => {
  // Returning false here prevents Cypress from failing the test on uncaught exceptions
  return false;
});