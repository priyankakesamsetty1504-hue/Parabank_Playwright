// tests/05_billPay.spec.js
// Module: Bill Payment
// Tags: @smoke @regression
// Tests: 2

const { test, expect } = require('@playwright/test');
const LoginPage        = require('../pages/LoginPage');
const BillPayPage      = require('../pages/BillPayPage');
const testData         = require('../test-data/testData');

test.describe('05 - Bill Payment Tests', () => {
  let loginPage, billPayPage;

  test.beforeEach(async ({ page }) => {
    loginPage   = new LoginPage(page);
    billPayPage = new BillPayPage(page);
    await loginPage.goto();
    await loginPage.login(testData.users.valid.username, testData.users.valid.password);
    await billPayPage.goto();
  });

  test('TC012 - @smoke Successful bill payment with valid data', async ({ page }) => {
    await billPayPage.payBill(testData.billPay.valid);
    const title = await billPayPage.getSuccessTitle();
    expect(title).toContain('Bill Payment Complete');
  });

  test('TC013 - @regression Bill pay with empty payee name', async ({ page }) => {
    const data = { ...testData.billPay.valid, payeeName: '' };
    await billPayPage.payBill(data);
    await expect(page.locator('.error')).toBeVisible();
  });
});
