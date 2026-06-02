// tests/08_loan.spec.js
// Module: Request Loan
// Tags: @smoke @regression
// Tests: 2

const { test, expect } = require('@playwright/test');
const LoginPage        = require('../pages/LoginPage');
const LoanPage         = require('../pages/LoanPage');
const testData         = require('../test-data/testData');

test.describe('08 - Request Loan Tests', () => {
  let loginPage, loanPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    loanPage  = new LoanPage(page);
    await loginPage.goto();
    await loginPage.login(testData.users.valid.username, testData.users.valid.password);
    await loanPage.goto();
  });

  test('TC017 - @smoke Apply for loan with valid amount', async ({ page }) => {
    await loanPage.applyForLoan(testData.loan.valid.amount, testData.loan.valid.downPayment);
    const title = await loanPage.getResultTitle();
    expect(title).toContain('Loan Request Processed');
  });

  test('TC018 - @regression Apply for large loan amount', async ({ page }) => {
    await loanPage.applyForLoan(testData.loan.large.amount, testData.loan.large.downPayment);
    const title  = await loanPage.getResultTitle();
    const status = await loanPage.getLoanStatus();
    expect(title).toContain('Loan Request Processed');
    expect(status).toBeTruthy();
  });
});
