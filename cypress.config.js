const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:'https://gorest.co.in/public/v2',
    specPattern:'cypress/e2e/*.{js,ts,tsx,jsx}',
  },
  retries:2,
  reporter: 'mochawesome',
  reporterOptions: {
    configFile:'report-config.json'
}
});
