// tests/10_logout.spec.js
// Module: Logout
// Tags: @smoke @regression
// Tests: 1

const { test, expect } = require('@playwright/test');
const LoginPage        = require('../pages/LoginPage');
const testData         = require('../test-data/testData');

test.describe('10 - Logout Tests', () => {
  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(testData.users.valid.username, testData.users.valid.password);
  });

  test('TC020 - @smoke Successful logout redirects to home', async ({ page }) => {
    await page.locator('a[href*="logout"]').click();
    await expect(page).toHaveURL(/index/);
    await expect(page.locator('input[name="username"]')).toBeVisible();
  });
});
