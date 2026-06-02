// pages/LoginPage.js
const BasePage = require('./BasePage');

class LoginPage extends BasePage {
  constructor(page) {
    super(page);
    this.usernameInput  = page.locator('input[name="username"]');
    this.passwordInput  = page.locator('input[name="password"]');
    this.loginButton    = page.locator('input[value="Log In"]');
    this.errorMessage   = page.locator('.error');
    this.registerLink   = page.locator('a[href*="register"]');
    this.forgotLink     = page.locator('a[href*="lookup"]');
    this.welcomeText    = page.locator('#leftPanel h2');
  }

  async goto()                        { await this.page.goto('/parabank/index.htm'); }
  async login(user, pass)             { await this.fillField(this.usernameInput, user); await this.fillField(this.passwordInput, pass); await this.loginButton.click(); }
  async isLoggedIn()                  { return await this.page.locator('#leftPanel').isVisible(); }
  async getErrorMessage()             { await this.errorMessage.waitFor({ state: 'visible' }); return await this.errorMessage.innerText(); }
  async clickRegister()               { await this.registerLink.click(); }
  async clickForgotLogin()            { await this.forgotLink.click(); }
}

module.exports = LoginPage;
