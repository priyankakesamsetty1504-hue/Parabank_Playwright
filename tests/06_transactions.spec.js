// tests/06_transactions.spec.js
// Module: Find Transactions
// Tags: @regression
// Tests: 2

const { test, expect }  = require('@playwright/test');
const LoginPage         = require('../pages/LoginPage');
const TransactionPage   = require('../pages/TransactionPage');
const testData          = require('../test-data/testData');

test.describe('06 - Find Transactions Tests', () => {
  let loginPage, transactionPage;

  test.beforeEach(async ({ page }) => {
    loginPage       = new LoginPage(page);
    transactionPage = new TransactionPage(page);
    await loginPage.goto();
    await loginPage.login(testData.users.valid.username, testData.users.valid.password);
    await transactionPage.goto();
  });

  test('TC014 - @regression Find transactions page loads correctly', async ({ page }) => {
    await expect(page.locator('#rightPanel')).toBeVisible();
    await expect(page.locator('#rightPanel h1')).toContainText('Find Transactions');
  });

  test('TC015 - @regression Find transaction by amount', async ({ page }) => {
    await transactionPage.findByAmount('100');
    // Either a results table or no results message should appear
    const hasTable   = await page.locator('#transactionTable').isVisible();
    const hasMessage = await page.locator('#rightPanel p').isVisible();
    expect(hasTable || hasMessage).toBeTruthy();
  });
});
