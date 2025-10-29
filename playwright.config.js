const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: 'tests',
  timeout: 60000,
  use: {
    headless: false,
    viewport: { width: 1280, height: 800 },
    actionTimeout: 20000,
    navigationTimeout: 30000,
    launchOptions: { slowMo: 500 }
  }
});
