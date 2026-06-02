// test-data/testData.js
// Centralized Test Data for ParaBank

const testData = {
  users: {
    valid: {
      username: 'john',
      password: 'demo',
    },
    invalid: {
      username: 'invalidUser123',
      password: 'wrongPassword',
    },
    locked: {
      username: '',
      password: '',
    },
  },

  registration: {
    valid: {
      firstName: 'Test',
      lastName:  'Automation',
      address:   '123 Test Street',
      city:      'Toronto',
      state:     'Ontario',
      zip:       'M5V 1A1',
      phone:     '4161234567',
      ssn:       '123456789',
      username:  `testuser_${Date.now()}`,
      password:  'Test@1234',
    },
    missingFields: {
      firstName: '',
      lastName:  '',
      address:   '',
      city:      '',
      state:     '',
      zip:       '',
      phone:     '',
      ssn:       '',
      username:  '',
      password:  '',
    },
  },

  transfer: {
    validAmount:   '100',
    largeAmount:   '999999',
    zeroAmount:    '0',
    negativeAmount: '-100',
    invalidAmount: 'abc',
  },

  billPay: {
    valid: {
      payeeName: 'Electric Company',
      address:   '456 Utility Ave',
      city:      'Vancouver',
      state:     'BC',
      zip:       'V6B 2K9',
      phone:     '6041234567',
      account:   '12345',
      amount:    '150',
    },
  },

  loan: {
    valid: {
      amount:      '1000',
      downPayment: '100',
    },
    large: {
      amount:      '999999',
      downPayment: '10',
    },
  },

  contact: {
    valid: {
      name:    'QA Tester',
      email:   'qa@test.com',
      phone:   '4169876543',
      message: 'This is an automated test message.',
    },
  },

  profile: {
    updated: {
      firstName: 'Updated',
      lastName:  'Name',
    },
  },
};

module.exports = testData;
