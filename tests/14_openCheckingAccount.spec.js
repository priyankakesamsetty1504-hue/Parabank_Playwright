// tests/14_openCheckingAccount.spec.js
// Module: Open Checking Account
// Tags: @smoke @regression
// Tests: 1

const { test, expect } = require('@playwright/test');
const LoginPage        = require('../pages/LoginPage');
const AccountsPage     = require('../pages/AccountsPage');
const testData         = require('../test-data/testData');

test.describe('14 - Open Checking Account Tests', () => {
  let loginPage, accountsPage;

  test.beforeEach(async ({ page }) => {
    loginPage    = new LoginPage(page);
    accountsPage = new AccountsPage(page);
    await loginPage.goto();
    await loginPage.login(testData.users.valid.username, testData.users.valid.password);
  });

  test('TC024 - @smoke Open a new Checking account successfully', async ({ page }) => {
    await accountsPage.gotoOpenAccount();
    await accountsPage.openNewAccount('0'); // 0 = CHECKING
    const msg       = await accountsPage.getSuccessMessage();
    const accountId = await accountsPage.getNewAccountId();
    expect(msg).toContain('Account Opened!');
    expect(accountId).toBeTruthy();
  });
});
