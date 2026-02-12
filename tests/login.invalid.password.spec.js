const { test, expect } = require("@playwright/test");
const LoginPage = require("../pages/LoginPage");

test("Login with invalid password", async ({ page }) => {
  const login = new LoginPage(page);

  await login.open();
  await login.login("tomsmith", "WrongPassword!");
  

  await expect(page.locator("#flash"))
    .toContainText("Your password is invalid");

  await expect(page).toHaveURL(/.*login/);

  console.log("✅ Test Case 3 passed");
});
