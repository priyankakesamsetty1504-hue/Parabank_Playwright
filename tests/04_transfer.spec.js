// tests/04_transfer.spec.js
// Module: Fund Transfer
// Tags: @smoke @regression
// Tests: 3

const { test, expect } = require('@playwright/test');
const LoginPage        = require('../pages/LoginPage');
const TransferPage     = require('../pages/TransferPage');
const testData         = require('../test-data/testData');
//git checkout -b hotfix/QA-999-urgent-fix commented
test.describe('04 - Fund Transfer Tests', () => {
  let loginPage, transferPage;

  test.beforeEach(async ({ page }) => {
    loginPage    = new LoginPage(page);
    transferPage = new TransferPage(page);
    await loginPage.goto();
    await loginPage.login(testData.users.valid.username, testData.users.valid.password);
    await transferPage.goto();
  });

  test('TC009 - @smoke Successful fund transfer between accounts', async ({ page }) => {
    await transferPage.transferFunds(testData.transfer.validAmount, 0, 1);
    const title = await transferPage.getSuccessTitle();
    expect(title).toContain('Transfer Complete!');
  });

  test('TC010 - @regression Transfer with zero amount', async ({ page }) => {
    await transferPage.transferFunds(testData.transfer.zeroAmount, 0, 1);
    await expect(page.locator('.error')).toBeVisible();
  });

  test('TC011 - @regression Transfer with invalid amount', async ({ page }) => {
    await transferPage.transferFunds(testData.transfer.invalidAmount, 0, 1);
    await expect(page.locator('.error')).toBeVisible();
  });
});
