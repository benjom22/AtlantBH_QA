const { Builder } = require('selenium-webdriver');
const NavigatorPage = require('../pages/navigator_page');
const chrome = require('selenium-webdriver/chrome');

let driver;
let navigatorPage;

beforeAll(async () => {
  driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(new chrome.Options().addArguments('--disable-gpu', '--window-size=1280,720'))
    .build();

  navigatorPage = new NavigatorPage(driver);
});

afterAll(async () => {
  if (driver) {
    await driver.quit();
  }
});

test('Main page loads successfully', async () => {
  await navigatorPage.open();
  await driver.sleep(5000);

  const currentUrl = await navigatorPage.getCurrentUrl();
  expect(currentUrl).toBe(navigatorPage.baseUrl);
}, 30000);

test('Accommodation category link opens correctly', async () => {
  await navigatorPage.clickAccommodationLink();
  await driver.sleep(5000);

  const currentUrl = await navigatorPage.getCurrentUrl();
  expect(currentUrl).toBe(navigatorPage.accommodationUrl);
  await driver.sleep(5000);

  await navigatorPage.clickAccomodation();

  await driver.sleep(5000);

  const currentUrl1 = await navigatorPage.getCurrentUrl();
  expect(currentUrl1).toBe(navigatorPage.accomodation);

}, 30000);

test('Returning to main page', async () => {
   await navigatorPage.clickMainPageLink();
   await driver.sleep(5000);

  const currentUrl = await navigatorPage.getCurrentUrl();
  expect(currentUrl).toBe(navigatorPage.baseUrl);  
}, 30000);

test('Search for Caffe slastičarna "MB"', async () => {
  await navigatorPage.searchForCaffe();
  
  await driver.sleep(5000); // Allow search results to load

  const currentUrl = await navigatorPage.getCurrentUrl();
  expect(currentUrl).toBe(navigatorPage.caffeURL);  

}, 30000);