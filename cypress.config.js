const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  viewportWidth: 1920,
  viewportHeight: 1080,
  video: false,
  e2e: {
    testIsolation: false,
    setupNodeEvents(on, config) {
    },
  },
});
