// tests/02_register.spec.js
// Module: Registration
// Tags: @smoke @regression
// Tests: 3

const { test, expect } = require('@playwright/test');
const RegisterPage     = require('../pages/RegisterPage');
const testData         = require('../test-data/testData');
const helpers          = require('../utils/helpers');

test.describe('02 - Registration Tests', () => {
  let registerPage;

  test.beforeEach(async ({ page }) => {
    registerPage = new RegisterPage(page);
    await registerPage.goto();
  });

  test('TC004 - @smoke Successful user registration with valid data', async ({ page }) => {
    const data = { ...testData.registration.valid, username: helpers.uniqueUsername() };
    await registerPage.register(data);
    const msg = await registerPage.getSuccessMessage();
    expect(msg).toContain('welcome');
  });

  test('TC005 - @regression Registration with empty required fields', async ({ page }) => {
    await registerPage.register(testData.registration.missingFields);
    const errors = await registerPage.getErrorMessages();
    expect(errors.length).toBeGreaterThan(0);
  });

  test('TC006 - @regression Registration with duplicate username', async ({ page }) => {
    // Use an already existing username
    const data = { ...testData.registration.valid, username: testData.users.valid.username };
    await registerPage.register(data);
    const errors = await registerPage.getErrorMessages();
    expect(errors.some(e => e.includes('username') || e.includes('taken') || e.includes('already'))).toBeTruthy();
  });
});
