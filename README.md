# Automation Exercise Login Test (Playwright)

A small end-to-end test that logs in with an account created manually on [Automation Exercise](https://www.automationexercise.com/) and verifies that the page displays `Logged in as <name>`.

## Requirements

- Node.js and npm
- A user account created manually on the website before running the test

## Setup

From this project directory:

```bash
npm install
npx playwright install chromium
```

Copy `.env.example` to `.env`, then enter the name, email, and password of your registered account in `.env`:

```env
LOGIN_NAME=Your signup name
LOGIN_EMAIL=your-registered-email@example.com
LOGIN_PASSWORD=your-account-password
```

Keep `.env` private. It is excluded from Git by `.gitignore`; never commit real credentials to GitHub.

## Run the test

```bash
npm test
```

Run with a visible browser window:

```bash
npm run test:headed
```

Open Playwright's interactive test runner:

```bash
npm run test:ui
```

Open the HTML report after a run:

```bash
npm run report
```

## What the test does

1. Opens the website home page.
2. Opens **Signup / Login**.
3. Checks that **Login to your account** is visible.
4. Enters the registered email and password.
5. Submits the form.
6. Checks that **Logged in as <name>** is visible.

Account creation is intentionally manual, as required by the assessment. The test does not place an order or delete the account.

## Project structure

```text
.
├── .env.example
├── .gitignore
├── package.json
├── playwright.config.js
└── tests/
    ├── login.spec.js
    └── pages/
        └── LoginPage.js
```
