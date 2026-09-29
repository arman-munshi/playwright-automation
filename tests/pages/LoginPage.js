class LoginPage {
  constructor(page) {
    this.page = page;
    this.signupLoginLink = page.getByRole('link', { name: /signup \/ login/i });
    this.loginHeading = page.getByRole('heading', { name: 'Login to your account' });
    this.emailInput = page.locator('[data-qa="login-email"]');
    this.passwordInput = page.locator('[data-qa="login-password"]');
    this.loginButton = page.locator('[data-qa="login-button"]');
  }

  async openFromHomePage() {
    await this.page.goto('/');
    await this.signupLoginLink.click();
  }

  async login(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  loggedInAs(name) {
    return this.page.getByText(`Logged in as ${name}`, { exact: false });
  }
}

module.exports = { LoginPage };
