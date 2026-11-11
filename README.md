# Playwright POM Framework - Sauce Demo

Page Object Model tests for https://www.saucedemo.com using Playwright and JavaScript.

## Project structure

- `pages/LoginPage.js` - login page object (locators, `login()`, `getErrorMessage()`)
- `pages/InventoryPage.js` - inventory page object (extends LoginPage, `isLoaded()`)
- `tests/login.spec.js` - data-driven login test
- `data/users.json` - test data (username, password, expected result)
- `playwright.config.js` - Playwright configuration (Chromium only)

## Requirements

- Node.js (LTS)
- npm

## Setup

```bash
npm ci
npx playwright install chromium
```

Run the commands one at a time and wait for each to finish.

## Run the tests

```bash
npm run test:login
```

This runs `tests/login.spec.js`, which loops through `data/users.json`:

| Username | Password | Expected |
|---|---|---|
| standard_user | secret_sauce | success (inventory page loads) |
| locked_out_user | secret_sauce | error (message shown) |
| standard_user | wrong_password | error (message shown) |

Expected result: 3 passed (1 success, 2 errors).

## Notes

- `tests/LoginPage.test.js` and `tests/Inventorypage.test.js` are extra practice tests. The graded run is `npm run test:login`.
- Use `npm run test:login` rather than plain `npx playwright test`, which also runs the practice files.
- 
