const { defineConfig } = require('cypress');
require('dotenv').config(); // Load environment variables from .env

module.exports = defineConfig({
  e2e: {
    // Access the .env variables for use in your tests
    env: {
      baseURL: process.env.BASE_URL,        // ENV variable for base URL
      qaAgentPath: process.env.QA_AGENT_PATH, // QA_AGENT_PATH
      username: process.env.USERNAME,      // Username
      password: process.env.PASSWORD,      // Password
    },
    // Pattern for test files
    specPattern: 'cypress/tests/**/*.cy.js',
    // Support file for custom commands and setup
    supportFile: 'cypress/support/e2e.js',
    defaultCommandTimeout: 10000,
    video: false,
    screenshotsFolder: 'reports/screenshots',
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'reports/mochawesome-report',
      overwrite: false,
      html: true,
      json: true,
    },
  },
});
