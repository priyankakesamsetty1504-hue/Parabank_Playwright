// tests/01_login.spec.js
// Module: Login
// Tags: @smoke @regression
// Tests: 3

const { test, expect } = require('@playwright/test');
const LoginPage        = require('../pages/LoginPage');
const testData         = require('../test-data/testData');

test.describe('01 - Login Tests', () => {
  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test('TC001 - @smoke Valid login with correct credentials', async ({ page }) => {
    await loginPage.login(testData.users.valid.username, testData.users.valid.password);
    await expect(page.locator('#leftPanel')).toBeVisible();
    await expect(page.locator('#leftPanel')).toContainText('Account Services');
  });

  test('TC002 - @regression Invalid login with wrong credentials', async ({ page }) => {
    await loginPage.login(testData.users.invalid.username, testData.users.invalid.password);
    const error = await loginPage.getErrorMessage();
    expect(error).toContain('login information is incorrect');
  });

  test('TC003 - @regression Login with empty credentials', async ({ page }) => {
    await loginPage.login('', '');
    await expect(page.locator('.error')).toBeVisible();
  });
});
