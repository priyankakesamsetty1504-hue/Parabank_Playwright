// tests/13_forgotLogin.spec.js
// Module: Forgot Login Info
// Tags: @regression
// Tests: 1

const { test, expect } = require('@playwright/test');
const LoginPage        = require('../pages/LoginPage');

test.describe('13 - Forgot Login Tests', () => {
  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test('TC023 - @regression Forgot login link navigates to lookup page', async ({ page }) => {
    await loginPage.clickForgotLogin();
    await expect(page).toHaveURL(/lookup/);
    await expect(page.locator('#rightPanel')).toBeVisible();
    await expect(page.locator('#rightPanel h1')).toContainText('Customer Lookup');
  });
});
