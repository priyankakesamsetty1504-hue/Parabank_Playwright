// pages/ProfilePage.js
const BasePage = require('./BasePage');

class ProfilePage extends BasePage {
  constructor(page) {
    super(page);
    this.firstNameInput = page.locator('input[id="customer.firstName"]');
    this.lastNameInput  = page.locator('input[id="customer.lastName"]');
    this.addressInput   = page.locator('input[id="customer.address.street"]');
    this.cityInput      = page.locator('input[id="customer.address.city"]');
    this.stateInput     = page.locator('input[id="customer.address.state"]');
    this.zipInput       = page.locator('input[id="customer.address.zipCode"]');
    this.phoneInput     = page.locator('input[id="customer.phoneNumber"]');
    this.updateButton   = page.locator('input[value="Update Profile"]');
    this.successMessage = page.locator('#rightPanel p');
  }

  async goto()              { await this.page.goto('/parabank/updateprofile.htm'); }
  async updateProfile(data) {
    await this.firstNameInput.clear();
    await this.fillField(this.firstNameInput, data.firstName);
    await this.lastNameInput.clear();
    await this.fillField(this.lastNameInput, data.lastName);
    await this.updateButton.click();
  }
  async getSuccessMessage() { await this.successMessage.waitFor({ state: 'visible' }); return await this.successMessage.innerText(); }
}

module.exports = ProfilePage;
