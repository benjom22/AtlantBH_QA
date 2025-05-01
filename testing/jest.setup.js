const { Builder } = require('selenium-webdriver');

global.driver = new Builder().forBrowser('chrome').build();

afterAll(async () => {
  await driver.quit();
});