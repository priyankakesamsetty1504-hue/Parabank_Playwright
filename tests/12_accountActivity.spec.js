// tests/12_accountActivity.spec.js
// Module: Account Activity
// Tags: @regression
// Tests: 1

const { test, expect } = require('@playwright/test');
const LoginPage        = require('../pages/LoginPage');
const AccountsPage     = require('../pages/AccountsPage');
const testData         = require('../test-data/testData');

test.describe('12 - Account Activity Tests', () => {
  let loginPage, accountsPage;

  test.beforeEach(async ({ page }) => {
    loginPage    = new LoginPage(page);
    accountsPage = new AccountsPage(page);
    await loginPage.goto();
    await loginPage.login(testData.users.valid.username, testData.users.valid.password);
  });

  test('TC022 - @regression View account activity by clicking account', async ({ page }) => {
    await accountsPage.goto();
    // Click the first account link in the table
    const firstAccount = page.locator('#accountTable tbody tr td a').first();
    await firstAccount.waitFor({ state: 'visible' });
    await firstAccount.click();
    await expect(page.locator('#rightPanel')).toBeVisible();
    await expect(page.locator('#rightPanel h1')).toContainText('Account Activity');
  });
});
