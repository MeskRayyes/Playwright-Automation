
# Playwright Automation Framework

An end-to-end UI and API test automation project built with Playwright and TypeScript.

## Project Overview

This project demonstrates automated testing of the SauceDemo web application and REST API endpoints using Playwright.

It follows the Page Object Model (POM) design pattern to improve test organization, maintainability, and reusability.

## Tech Stack

- Playwright Test
- TypeScript
- Node.js
- REST API Testing
- Page Object Model (POM)
- Git & GitHub
- GitHub Actions (CI)

## Project Structure

```text
Playwright-Automation/
├── .github/
│   └── workflows/
│       └── playwright.yml
├── tests/
│   ├── pages/
│   │   ├── LoginPage.ts
│   │   ├── CartPage.ts
│   │   └── CheckoutPage.ts
│   ├── testData/
│   │   └── users.ts
│   ├── api.spec.ts
│   ├── example.spec.ts
│   └── saucedemo.spec.ts
├── playwright.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

## Automated Test Coverage

### UI Testing

- Successful user login
- Invalid login validation
- Adding products to the shopping cart
- Completing the checkout process

### API Testing

Using JSONPlaceholder REST API:

- GET – Retrieve resources
- POST – Create a resource
- PUT – Update a resource
- DELETE – Delete a resource

## Page Object Model

The project uses the Page Object Model (POM) to separate page locators and actions from test scenarios.

Page classes include:

- LoginPage
- CartPage
- CheckoutPage

## Running the Tests

### 1. Clone the repository

```bash
git clone https://github.com/MeskRayyes/Playwright-Automation.git
```

### 2. Navigate to the project

```bash
cd Playwright-Automation
```

### 3. Install dependencies

```bash
npm install
```

### 4. Install Playwright browsers

```bash
npx playwright install
```

### 5. Run all tests

```bash
npx playwright test
```

### 6. Run tests with browser visible

```bash
npx playwright test --headed
```

### 7. View the HTML report

```bash
npx playwright show-report
```

## Continuous Integration

GitHub Actions is configured to automatically execute the Playwright test suite when code is pushed to the main branch or when a pull request is created.

The workflow installs dependencies, sets up Chromium, runs the tests, and uploads the HTML report as an artifact.

