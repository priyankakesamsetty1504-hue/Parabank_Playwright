// tests/03_accounts.spec.js
// Module: Accounts Overview
// Tags: @smoke @regression
// Tests: 2

const { test, expect } = require('@playwright/test');
const LoginPage        = require('../pages/LoginPage');
const AccountsPage     = require('../pages/AccountsPage');
const testData         = require('../test-data/testData');
// WIP: adding new account test - not finished yet

test.describe('03 - Accounts Overview Tests', () => {
  let loginPage, accountsPage;

  test.beforeEach(async ({ page }) => {
    loginPage    = new LoginPage(page);
    accountsPage = new AccountsPage(page);
    await loginPage.goto();
    await loginPage.login(testData.users.valid.username, testData.users.valid.password);
  });

  test('TC007 - @smoke Accounts overview displays account list', async ({ page }) => {
    await accountsPage.goto();
    await expect(page.locator('#accountTable')).toBeVisible();
    const rows = await accountsPage.getAccountRows();
    expect(rows.length).toBeGreaterThan(0);
  });

  test('TC008 - @regression Open a new Savings account', async ({ page }) => {
    await accountsPage.gotoOpenAccount();
    await accountsPage.openNewAccount('1'); // 1 = SAVINGS
    const msg = await accountsPage.getSuccessMessage();
    expect(msg).toContain('Account Opened!');
  });
});
