const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 15000,
  pageLoadTimeout: 15000,
  requestTimeout: 15000,
  viewportHeight: 768,
  viewportWidth: 1366,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
