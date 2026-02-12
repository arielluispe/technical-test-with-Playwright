const { test, expect } = require("@playwright/test");
const LoginPage = require("../pages/LoginPage");

test("Login with invalid username", async ({ page }) => {
  const login = new LoginPage(page);

  await login.open();
  await login.login("invalidUser", "SuperSecretPassword!");

  await expect(page.locator("#flash"))
    .toContainText("Your username is invalid");

  await expect(page).toHaveURL(/.*login/);

  console.log("✅ Test Case 2 passed");
});
