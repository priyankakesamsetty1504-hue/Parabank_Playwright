// pages/AccountsPage.js
const BasePage = require('./BasePage');

class AccountsPage extends BasePage {
  constructor(page) {
    super(page);
    this.accountsOverviewLink = page.locator('a[href*="overview"]');
    this.accountTable         = page.locator('#accountTable');
    this.totalBalance         = page.locator('.ng-binding').last();
    this.openAccountLink      = page.locator('a[href*="openaccount"]');
    this.accountTypeSelect    = page.locator('select#type');
    this.fromAccountSelect    = page.locator('select#fromAccountId');
    this.openAccountButton    = page.locator('input[value="Open New Account"]');
    this.newAccountId         = page.locator('#newAccountId');
    this.successHeader        = page.locator('#rightPanel h1');
  }

  async goto()                      { await this.page.goto('/parabank/overview.htm'); }
  async gotoOpenAccount()           { await this.page.goto('/parabank/openaccount.htm'); }
  async getAccountRows()            { return await this.accountTable.locator('tbody tr').all(); }
  async openNewAccount(type)        {
    await this.accountTypeSelect.selectOption(type); // 0=CHECKING, 1=SAVINGS
    await this.openAccountButton.click();
  }
  async getNewAccountId()           { await this.newAccountId.waitFor({ state: 'visible' }); return await this.newAccountId.innerText(); }
  async getSuccessMessage()         { await this.successHeader.waitFor({ state: 'visible' }); return await this.successHeader.innerText(); }
  async clickAccount(accountId)     { await this.page.locator(`a:has-text("${accountId}")`).click(); }
}

module.exports = AccountsPage;
