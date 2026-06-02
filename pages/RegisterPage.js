// pages/RegisterPage.js
const BasePage = require('./BasePage');

class RegisterPage extends BasePage {
  constructor(page) {
    super(page);
    this.firstNameInput   = page.locator('input[id="customer.firstName"]');
    this.lastNameInput    = page.locator('input[id="customer.lastName"]');
    this.addressInput     = page.locator('input[id="customer.address.street"]');
    this.cityInput        = page.locator('input[id="customer.address.city"]');
    this.stateInput       = page.locator('input[id="customer.address.state"]');
    this.zipInput         = page.locator('input[id="customer.address.zipCode"]');
    this.phoneInput       = page.locator('input[id="customer.phoneNumber"]');
    this.ssnInput         = page.locator('input[id="customer.ssn"]');
    this.usernameInput    = page.locator('input[id="customer.username"]');
    this.passwordInput    = page.locator('input[id="customer.password"]');
    this.confirmPassword  = page.locator('input[id="repeatedPassword"]');
    this.registerButton   = page.locator('input[value="Register"]');
    this.successMessage   = page.locator('#rightPanel p');
    this.errorMessages    = page.locator('.error');
  }

  async goto()                { await this.page.goto('/parabank/register.htm'); }
  async register(data)        {
    await this.fillField(this.firstNameInput, data.firstName);
    await this.fillField(this.lastNameInput, data.lastName);
    await this.fillField(this.addressInput, data.address);
    await this.fillField(this.cityInput, data.city);
    await this.fillField(this.stateInput, data.state);
    await this.fillField(this.zipInput, data.zip);
    await this.fillField(this.phoneInput, data.phone);
    await this.fillField(this.ssnInput, data.ssn);
    await this.fillField(this.usernameInput, data.username);
    await this.fillField(this.passwordInput, data.password);
    await this.fillField(this.confirmPassword, data.password);
    await this.registerButton.click();
  }
  async getSuccessMessage()   { await this.successMessage.waitFor({ state: 'visible' }); return await this.successMessage.innerText(); }
  async getErrorMessages()    { return await this.errorMessages.allInnerTexts(); }
}

module.exports = RegisterPage;
