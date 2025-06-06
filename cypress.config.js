const { defineConfig } = require('cypress');
require('dotenv').config();

module.exports = defineConfig({
  e2e: {
    experimentalOriginDependencies: true,
    env: {
      baseURL: process.env.BASE_URL,
      authURL: process.env.AUTH_URL,
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
    },
    specPattern: 'cypress/tests/**/*.cy.js',
    supportFile: 'cypress/support/e2e.js',
    defaultCommandTimeout: 50000,
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
