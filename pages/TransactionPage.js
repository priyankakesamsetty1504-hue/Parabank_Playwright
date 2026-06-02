// pages/TransactionPage.js
const BasePage = require('./BasePage');

class TransactionPage extends BasePage {
  constructor(page) {
    super(page);
    this.transactionTable     = page.locator('#transactionTable');
    this.findTransactionLink  = page.locator('a[href*="findtrans"]');
    this.transactionIdInput   = page.locator('input#transactionId');
    this.findByIdButton       = page.locator('button[ng-click*="criteria.searchById"]');
    this.amountInput          = page.locator('input#amount');
    this.findByAmountButton   = page.locator('button[ng-click*="criteria.searchByAmount"]');
    this.resultTable          = page.locator('#transactionTable');
    this.noResultsMessage     = page.locator('#rightPanel p');
  }

  async goto()                      { await this.page.goto('/parabank/findtrans.htm'); }
  async findById(id)                { await this.fillField(this.transactionIdInput, id); await this.findByIdButton.click(); }
  async findByAmount(amount)        { await this.fillField(this.amountInput, amount); await this.findByAmountButton.click(); }
  async getTransactionRows()        { return await this.transactionTable.locator('tbody tr').all(); }
  async getTransactionCount()       { return await this.transactionTable.locator('tbody tr').count(); }
}

module.exports = TransactionPage;
