// utils/logger.js
// Test Logger Utility

const logger = {
  info(message)    { console.log(`ℹ️  [INFO]  ${message}`); },
  success(message) { console.log(`✅ [PASS]  ${message}`); },
  warn(message)    { console.warn(`⚠️  [WARN]  ${message}`); },
  error(message)   { console.error(`❌ [FAIL]  ${message}`); },
  step(num, desc)  { console.log(`📌 [STEP ${num}] ${desc}`); },
};

module.exports = logger;
