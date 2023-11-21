const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    // Enables the "Run All Specs" UI feature, allowing the execution of
    // multiple specs sequentially.
    experimentalRunAllSpecs: true,
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
})
