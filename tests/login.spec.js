const { test, expect } = require('@playwright/test');
const { LoginPage } = require('./pages/LoginPage');

const { LOGIN_NAME, LOGIN_EMAIL, LOGIN_PASSWORD } = process.env;

function requireLoginCredentials() {
  const missing = [
    ['LOGIN_NAME', LOGIN_NAME],
    ['LOGIN_EMAIL', LOGIN_EMAIL],
    ['LOGIN_PASSWORD', LOGIN_PASSWORD],
  ]
    .filter(([, value]) => !value || value.startsWith('Your ') || value.startsWith('your-'))
    .map(([key]) => key);

  if (missing.length > 0) {
    throw new Error(
      `Missing ${missing.join(', ')}. Copy .env.example to .env and enter your manually registered account details.`
    );
  }
}

test('a registered user can log in successfully', async ({ page }) => {
  requireLoginCredentials();

  const loginPage = new LoginPage(page);
  await loginPage.openFromHomePage();

  await expect(loginPage.loginHeading).toBeVisible();
  await loginPage.login(LOGIN_EMAIL, LOGIN_PASSWORD);

  // Successful login is confirmed by the account name displayed in the site header.
  await expect(loginPage.loggedInAs(LOGIN_NAME)).toBeVisible();
});



