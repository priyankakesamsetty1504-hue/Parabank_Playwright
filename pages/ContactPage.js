// pages/ContactPage.js
const BasePage = require('./BasePage');

class ContactPage extends BasePage {
  constructor(page) {
    super(page);
    this.nameInput      = page.locator('input#name');
    this.emailInput     = page.locator('input#email');
    this.phoneInput     = page.locator('input#phone');
    this.messageInput   = page.locator('textarea#message');
    this.sendButton     = page.locator('input[value="Send to Customer Care"]');
    this.successMessage = page.locator('#rightPanel p');
  }

  async goto()              { await this.page.goto('/parabank/contact.htm'); }
  async sendMessage(data)   {
    await this.fillField(this.nameInput, data.name);
    await this.fillField(this.emailInput, data.email);
    await this.fillField(this.phoneInput, data.phone);
    await this.fillField(this.messageInput, data.message);
    await this.sendButton.click();
  }
  async getSuccessMessage() { await this.successMessage.waitFor({ state: 'visible' }); return await this.successMessage.innerText(); }
}

module.exports = ContactPage;
