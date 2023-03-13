const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    baseUrl: "https://www.amazon.es",
    specPattern: "cypress/e2e/step-definitions/amazonSteps.js",
    setupNodeEvents(on, config){
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
    
    chromeWebSecurity: false,
});