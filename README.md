# 🏦 ParaBank - Enterprise Playwright Framework

Enterprise-level test automation framework for [ParaBank](https://parabank.parasoft.com/parabank/index.htm) built with **Playwright + JavaScript**.

---

## 📁 Framework Structure

```
parabank-framework/
├── pages/                     # Page Object Models
│   ├── BasePage.js            # Base class for all pages
│   ├── LoginPage.js
│   ├── RegisterPage.js
│   ├── AccountsPage.js
│   ├── TransferPage.js
│   ├── BillPayPage.js
│   ├── TransactionPage.js
│   ├── ProfilePage.js
│   ├── LoanPage.js
│   └── ContactPage.js
├── tests/                     # Spec files (15 test suites)
│   ├── 01_login.spec.js
│   ├── 02_register.spec.js
│   ├── 03_accounts.spec.js
│   ├── 04_transfer.spec.js
│   ├── 05_billPay.spec.js
│   ├── 06_transactions.spec.js
│   ├── 07_profile.spec.js
│   ├── 08_loan.spec.js
│   ├── 09_contact.spec.js
│   ├── 10_logout.spec.js
│   ├── 11_navigation.spec.js
│   ├── 12_accountActivity.spec.js
│   ├── 13_forgotLogin.spec.js
│   ├── 14_openCheckingAccount.spec.js
│   └── 15_e2eFlow.spec.js     # Full E2E flow
├── test-data/
│   └── testData.js            # Centralized test data
├── utils/
│   ├── helpers.js             # Utility functions
│   └── logger.js             # Custom logger
├── reports/
│   ├── html/                  # HTML reports
│   └── json/                  # JSON reports
├── screenshots/               # Failure screenshots
├── .env.dev                   # Environment variables
└── playwright.config.js       # Playwright configuration
```

---

## 🚀 Getting Started

### Install dependencies
```bash
npm install
npx playwright install
```

### Run all tests
```bash
npm test
```

### Run smoke tests only
```bash
npm run test:smoke
```

### Run regression tests
```bash
npm run test:regression
```

### Run specific spec file
```bash
npx playwright test tests/04_transfer.spec.js
```

### Run with headed browser
```bash
npm run test:headed
```

### Open HTML report
```bash
npm run report
```

---

## 🧪 Test Coverage (25 Test Cases across 15 Spec Files)

| Spec File | Module | Tests |
|---|---|---|
| 01_login.spec.js | Login | TC001–TC003 |
| 02_register.spec.js | Registration | TC004–TC006 |
| 03_accounts.spec.js | Accounts Overview | TC007–TC008 |
| 04_transfer.spec.js | Fund Transfer | TC009–TC011 |
| 05_billPay.spec.js | Bill Payment | TC012–TC013 |
| 06_transactions.spec.js | Transactions | TC014–TC015 |
| 07_profile.spec.js | Update Profile | TC016 |
| 08_loan.spec.js | Request Loan | TC017–TC018 |
| 09_contact.spec.js | Contact Us | TC019 |
| 10_logout.spec.js | Logout | TC020 |
| 11_navigation.spec.js | Navigation | TC021 |
| 12_accountActivity.spec.js | Account Activity | TC022 |
| 13_forgotLogin.spec.js | Forgot Login | TC023 |
| 14_openCheckingAccount.spec.js | Open Account | TC024 |
| 15_e2eFlow.spec.js | Full E2E Flow | TC025 |

---

## ⚙️ Environment Configuration

Edit `.env.dev` to change the target URL:
```
BASE_URL=https://parabank.parasoft.com/parabank/index.htm
HEADLESS=false
```
