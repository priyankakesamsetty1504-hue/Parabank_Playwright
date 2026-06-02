// tests/15_e2eFlow.spec.js
// Module: End-to-End User Flow
// Tags: @smoke @e2e
// Tests: 1

const { test, expect } = require('@playwright/test');
const LoginPage        = require('../pages/LoginPage');
const AccountsPage     = require('../pages/AccountsPage');
const TransferPage     = require('../pages/TransferPage');
const BillPayPage      = require('../pages/BillPayPage');
const testData         = require('../test-data/testData');
const logger           = require('../utils/logger');

test.describe('15 - End-to-End Full User Flow', () => {

  test('TC025 - @smoke @e2e Complete banking flow: Login → View Accounts → Transfer → Bill Pay → Logout', async ({ page }) => {

    // Step 1: Login
    logger.step(1, 'Login with valid credentials');
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(testData.users.valid.username, testData.users.valid.password);
    await expect(page.locator('#leftPanel')).toBeVisible();
    logger.success('Login successful');

    // Step 2: View Accounts Overview
    logger.step(2, 'Navigate to Accounts Overview');
    const accountsPage = new AccountsPage(page);
    await accountsPage.goto();
    await expect(page.locator('#accountTable')).toBeVisible();
    const rows = await accountsPage.getAccountRows();
    expect(rows.length).toBeGreaterThan(0);
    logger.success(`Found ${rows.length} account(s)`);

    // Step 3: Open a new Savings Account
    logger.step(3, 'Open a new Savings Account');
    await accountsPage.gotoOpenAccount();
    await accountsPage.openNewAccount('1');
    const openMsg = await accountsPage.getSuccessMessage();
    expect(openMsg).toContain('Account Opened!');
    logger.success('New savings account opened');

    // Step 4: Transfer Funds
    logger.step(4, 'Transfer funds between accounts');
    const transferPage = new TransferPage(page);
    await transferPage.goto();
    await transferPage.transferFunds(testData.transfer.validAmount, 0, 1);
    const transferTitle = await transferPage.getSuccessTitle();
    expect(transferTitle).toContain('Transfer Complete!');
    logger.success('Fund transfer completed');

    // Step 5: Pay a Bill
    logger.step(5, 'Pay a bill');
    const billPayPage = new BillPayPage(page);
    await billPayPage.goto();
    await billPayPage.payBill(testData.billPay.valid);
    const billTitle = await billPayPage.getSuccessTitle();
    expect(billTitle).toContain('Bill Payment Complete');
    logger.success('Bill payment completed');

    // Step 6: Logout
    logger.step(6, 'Logout');
    await page.locator('a[href*="logout"]').click();
    await expect(page).toHaveURL(/index/);
    await expect(page.locator('input[name="username"]')).toBeVisible();
    logger.success('Logout successful - E2E Flow Complete ✅');
  });
});
