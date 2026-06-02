// utils/helpers.js
// Reusable Utility Functions

const helpers = {
  /**
   * Generate a random string of given length
   */
  randomString(length = 8) {
    return Math.random().toString(36).substring(2, 2 + length);
  },

  /**
   * Generate a unique username
   */
  uniqueUsername() {
    return `user_${Date.now()}_${this.randomString(4)}`;
  },

  /**
   * Generate a random dollar amount between min and max
   */
  randomAmount(min = 10, max = 500) {
    return String(Math.floor(Math.random() * (max - min + 1)) + min);
  },

  /**
   * Wait for a given number of milliseconds
   */
  async wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  },

  /**
   * Format currency string to number
   */
  parseCurrency(str) {
    return parseFloat(str.replace(/[$,]/g, ''));
  },

  /**
   * Get current date in MM/DD/YYYY format
   */
  getCurrentDate() {
    return new Date().toLocaleDateString('en-US');
  },

  /**
   * Log test step with timestamp
   */
  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`);
  },
};

module.exports = helpers;
