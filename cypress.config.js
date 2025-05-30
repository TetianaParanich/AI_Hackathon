const { defineConfig } = require('cypress');
require('dotenv').config();

module.exports = defineConfig({
  e2e: {
    env: {
      baseURL: process.env.BASE_URL,
      agentsPath: process.env.AGENTS_PATH,
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
      apiToken: process.env.API_TOKEN
    },
    specPattern: 'cypress/tests/**/*.cy.js',
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
