// tests/11_navigation.spec.js
// Module: Navigation & UI
// Tags: @smoke @regression
// Tests: 1

const { test, expect } = require('@playwright/test');
const LoginPage        = require('../pages/LoginPage');
const testData         = require('../test-data/testData');

test.describe('11 - Navigation Tests', () => {
  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test('TC021 - @smoke Home page loads with all key elements', async ({ page }) => {
    await expect(page).toHaveTitle(/ParaBank/);
    await expect(page.locator('input[name="username"]')).toBeVisible();
    await expect(page.locator('input[name="password"]')).toBeVisible();
    await expect(page.locator('a[href*="register"]')).toBeVisible();
    await expect(page.locator('a[href*="lookup"]')).toBeVisible();
  });
});
