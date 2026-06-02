// pages/BillPayPage.js
const BasePage = require('./BasePage');

class BillPayPage extends BasePage {
  constructor(page) {
    super(page);
    this.payeeNameInput     = page.locator('input[name="payee.name"]');
    this.addressInput       = page.locator('input[name="payee.address.street"]');
    this.cityInput          = page.locator('input[name="payee.address.city"]');
    this.stateInput         = page.locator('input[name="payee.address.state"]');
    this.zipInput           = page.locator('input[name="payee.address.zipCode"]');
    this.phoneInput         = page.locator('input[name="payee.phoneNumber"]');
    this.accountInput       = page.locator('input[name="payee.accountNumber"]');
    this.verifyAccountInput = page.locator('input[name="verifyAccount"]');
    this.amountInput        = page.locator('input[name="amount"]');
    this.fromAccountSelect  = page.locator('select[name="fromAccountId"]');
    this.sendButton         = page.locator('input[value="Send Payment"]');
    this.successTitle       = page.locator('#rightPanel h1');
    this.successMessage     = page.locator('#rightPanel p');
  }

  async goto()              { await this.page.goto('/parabank/billpay.htm'); }
  async payBill(data)       {
    await this.fillField(this.payeeNameInput, data.payeeName);
    await this.fillField(this.addressInput, data.address);
    await this.fillField(this.cityInput, data.city);
    await this.fillField(this.stateInput, data.state);
    await this.fillField(this.zipInput, data.zip);
    await this.fillField(this.phoneInput, data.phone);
    await this.fillField(this.accountInput, data.account);
    await this.fillField(this.verifyAccountInput, data.account);
    await this.fillField(this.amountInput, data.amount);
    await this.sendButton.click();
  }
  async getSuccessTitle()   { await this.successTitle.waitFor({ state: 'visible' }); return await this.successTitle.innerText(); }
}

module.exports = BillPayPage;
