// tests/09_contact.spec.js
// Module: Contact Us
// Tags: @regression
// Tests: 1

const { test, expect } = require('@playwright/test');
const ContactPage      = require('../pages/ContactPage');
const testData         = require('../test-data/testData');

test.describe('09 - Contact Us Tests', () => {
  let contactPage;

  test.beforeEach(async ({ page }) => {
    contactPage = new ContactPage(page);
    await contactPage.goto();
  });

  test('TC019 - @regression Send contact message successfully', async ({ page }) => {
    await contactPage.sendMessage(testData.contact.valid);
    const msg = await contactPage.getSuccessMessage();
    expect(msg).toContain('Thank you');
  });
});
