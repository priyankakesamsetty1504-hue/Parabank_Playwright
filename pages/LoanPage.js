// pages/LoanPage.js
const BasePage = require('./BasePage');

class LoanPage extends BasePage {
  constructor(page) {
    super(page);
    this.loanAmountInput    = page.locator('input#amount');
    this.downPaymentInput   = page.locator('input#downPayment');
    this.fromAccountSelect  = page.locator('select#fromAccountId');
    this.applyButton        = page.locator('input[value="Apply Now"]');
    this.resultTitle        = page.locator('#rightPanel h1');
    this.loanStatus         = page.locator('#loanStatus');
    this.errorMessage       = page.locator('.error');
  }

  async goto()                          { await this.page.goto('/parabank/requestloan.htm'); }
  async applyForLoan(amount, downPayment) {
    await this.fillField(this.loanAmountInput, amount);
    await this.fillField(this.downPaymentInput, downPayment);
    await this.applyButton.click();
  }
  async getLoanStatus()                 { await this.loanStatus.waitFor({ state: 'visible' }); return await this.loanStatus.innerText(); }
  async getResultTitle()                { await this.resultTitle.waitFor({ state: 'visible' }); return await this.resultTitle.innerText(); }
}

module.exports = LoanPage;
