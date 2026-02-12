class LoginPage {
  constructor(page) {
    this.page = page;

    this.usernameInput = "#username";
    this.passwordInput = "#password";
    this.loginButton = "button[type='submit']";
    this.flashMessage = "#flash";
  }

  async open() {
    await this.page.goto("https://the-internet.herokuapp.com/login");
  }

  async login(username, password) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
  }

  async getMessage() {
    return await this.page.textContent(this.flashMessage);
  }

  async isOnLoginPage() {
    return this.page.url().includes("/login");
  }
}

module.exports = LoginPage;
