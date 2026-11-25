# E-Commerce End-to-End Test Automation Framework

A portfolio automation framework built with Playwright and JavaScript for the SauceDemo demo e-commerce application.

## Application under test

https://www.saucedemo.com/

Demo credentials are stored in `testdata/users.json`. Use only the public demo credentials supplied for this demo application.

## Prerequisites

- Node.js 20+ (Node.js 22 recommended)
- npm
- Visual Studio Code (recommended)
- Git

## Setup

```bash
npm install
npx playwright install
```

## Run the tests

All browsers:

```bash
npm test
```

Chromium only:

```bash
npm run test:chromium
```

Firefox only:

```bash
npm run test:firefox
```

WebKit only:

```bash
npm run test:webkit
```

Run with a visible browser:

```bash
npm run test:headed
```

Open the HTML report:

```bash
npm run report
```

## Implemented scenarios

### Authentication
- Successful login
- Invalid login
- Locked-out user validation

### Product listing
- Product sorting by name
- Product sorting by price
- Add product to cart
- Remove product from inventory

### Shopping cart
- Verify added product
- Remove product from cart

### Checkout
- Enter customer details
- Verify order summary
- Complete an order
- Validate required checkout information

## Framework capabilities

- Page Object Model
- Reusable custom Playwright fixtures
- JSON-based test data
- Chromium, Firefox and WebKit projects
- Parallel execution configuration
- HTML report
- Screenshot, video and trace retained on failure
- GitHub Actions CI workflow

## Important project notes

- This project automates a public demo website, not a production store.
- Test results can vary if the demo website is unavailable or changes.
- The framework currently demonstrates UI automation. It does not claim REST API testing or API mocking.
- Execute the tests locally and verify browser compatibility before describing all three browser projects as successfully validated in your resume.
