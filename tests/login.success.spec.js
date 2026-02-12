const { test, expect } = require("@playwright/test");
const LoginPage = require("../pages/LoginPage");

test("Successful login", async ({ page }) => {
  const login = new LoginPage(page);

  await login.open();
  await login.login("tomsmith", "SuperSecretPassword!");

  await expect(page.locator("#flash"))
    .toContainText("You logged into a secure area");

  console.log("✅ Test Case 1 passed");
});
