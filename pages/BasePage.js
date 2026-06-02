// pages/BasePage.js
// Base Page Object - All pages extend this class

class BasePage {
  constructor(page) {
    this.page = page;
  }

  async navigate(path = '') {
    await this.page.goto(path);
  }

  async getTitle() {
    return await this.page.title();
  }

  async waitForPageLoad() {
    await this.page.waitForLoadState('networkidle');
  }

  async takeScreenshot(name) {
    await this.page.screenshot({
      path: `screenshots/${name}_${Date.now()}.png`,
      fullPage: true,
    });
  }

  async isElementVisible(locator) {
    return await locator.isVisible();
  }

  async getText(locator) {
    return await locator.innerText();
  }

  async waitForElement(locator) {
    await locator.waitFor({ state: 'visible' });
  }

  async clickElement(locator) {
    await locator.waitFor({ state: 'visible' });
    await locator.click();
  }

  async fillField(locator, value) {
    await locator.waitFor({ state: 'visible' });
    await locator.fill(value);
  }
}

module.exports = BasePage;
