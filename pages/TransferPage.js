// pages/TransferPage.js
const BasePage = require('./BasePage');

class TransferPage extends BasePage {
  constructor(page) {
    super(page);
    this.amountInput      = page.locator('input#amount');
    this.fromAccount      = page.locator('select#fromAccountId');
    this.toAccount        = page.locator('select#toAccountId');
    this.transferButton   = page.locator('input[value="Transfer"]');
    this.successTitle     = page.locator('#rightPanel h1');
    this.successMessage   = page.locator('#rightPanel p');
    this.errorMessage     = page.locator('.error');
  }

  async goto()                          { await this.page.goto('/parabank/transfer.htm'); }
  async transferFunds(amount, from, to) {
    await this.fillField(this.amountInput, amount);
    await this.fromAccount.selectOption({ index: from });
    await this.toAccount.selectOption({ index: to });
    await this.transferButton.click();
  }
  async getSuccessTitle()               { await this.successTitle.waitFor({ state: 'visible' }); return await this.successTitle.innerText(); }
  async getSuccessMessage()             { await this.successMessage.waitFor({ state: 'visible' }); return await this.successMessage.innerText(); }
  async getErrorMessage()               { await this.errorMessage.waitFor({ state: 'visible' }); return await this.errorMessage.innerText(); }
}

module.exports = TransferPage;
