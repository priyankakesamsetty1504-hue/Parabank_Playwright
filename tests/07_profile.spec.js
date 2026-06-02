// tests/07_profile.spec.js
// Module: Update Profile
// Tags: @regression
// Tests: 1

const { test, expect } = require('@playwright/test');
const LoginPage        = require('../pages/LoginPage');
const ProfilePage      = require('../pages/ProfilePage');
const testData         = require('../test-data/testData');

test.describe('07 - Update Profile Tests', () => {
  let loginPage, profilePage;

  test.beforeEach(async ({ page }) => {
    loginPage   = new LoginPage(page);
    profilePage = new ProfilePage(page);
    await loginPage.goto();
    await loginPage.login(testData.users.valid.username, testData.users.valid.password);
    await profilePage.goto();
  });

  test('TC016 - @regression Successfully update user profile', async ({ page }) => {
    await profilePage.updateProfile(testData.profile.updated);
    const msg = await profilePage.getSuccessMessage();
    expect(msg).toContain('updated');
  });
});
