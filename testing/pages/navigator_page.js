const { By, until } = require('selenium-webdriver');

class NavigatorPage {
  constructor(driver) {
    this.driver = driver;
    this.baseUrl = 'https://www.navigator.ba/#/categories';
    this.accommodationUrl = 'https://www.navigator.ba/#/categories/accommodation';
    this.accomodation = 'https://www.navigator.ba/#/p/toplik-15';
    this.caffeURL = 'https://www.navigator.ba/#/search/Caffe%20slasti%C4%8Darna%20%22MB%22';
  }

  async open() {
    await this.driver.get(this.baseUrl);
  }

  async clickAccommodationLink() {
    const linkElement = await this.driver.wait(
      until.elementLocated(By.xpath('/html/body/div[4]/div/div/div[2]/div/div[1]/div/div[1]/ul/li[2]/a')),
      5000
    );
    await linkElement.click();

    // Wait for the page to load
    await this.driver.wait(until.urlIs(this.accommodationUrl), 10000);
  }

  async clickAccomodation() {
    const linkElement = await this.driver.wait(
      until.elementLocated(By.xpath('/html/body/div[4]/div/div/div[2]/div/div[1]/div/div[1]/ul/li[1]/a/div/div[1]/div[1]')),
      5000
    );
    await linkElement.click();
  }

  async clickMainPageLink() {
    const linkElement = await this.driver.wait(
      until.elementLocated(By.xpath('/html/body/div[4]/div/div/div[1]/a')),
      5000
    );
    await linkElement.click();
  }

   async searchForCaffe() {
  
    // Wait for the input field and type the search query
    const searchInput = await this.driver.wait(
      until.elementLocated(By.xpath('/html/body/div[4]/div/div/div[1]/div/div/span/input[2]')),
      5000
    );
    await searchInput.sendKeys('Caffe slastičarna "MB"');

    // Click the search button
    const searchButton = await this.driver.wait(
      until.elementLocated(By.xpath('/html/body/div[4]/div/div/div[1]/div/div/a')),
      5000
    );
    await searchButton.click();

    // Wait for results to load
    await this.driver.sleep(3000);
  }


  async getCurrentUrl() {
    return await this.driver.getCurrentUrl();
  }
}

module.exports = NavigatorPage;