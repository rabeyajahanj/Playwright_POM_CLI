import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';

test('click login button', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.BrowserOpen();
  await loginPage.enterUsername('standard_user');
  await loginPage.enterPassword('secret_sauce');
  await loginPage.clickLoginButton();

  await page.waitForTimeout(3000);
  await loginPage.closeBrowser();
});
