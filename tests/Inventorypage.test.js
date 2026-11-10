import { test,expect } from '@playwright/test';
import { InventoryPage } from '../pages/InventoryPage.js';  

test('click login button', async ({ page }) => {
  const inventoryPage = new InventoryPage(page);

  await inventoryPage.BrowserOpen();
  await inventoryPage.enterUsername('standard_user');
  await inventoryPage.enterPassword('secret_sauce');
  await inventoryPage.clickLoginButton();

  await page.waitForTimeout(3000);
  await inventoryPage.clickAddBackpackButton();
  await page.waitForTimeout(3000);
  await inventoryPage.clickAddBikeLightButton();
  await page.waitForTimeout(3000);
  await inventoryPage.clickCartLink();
  await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');

  await inventoryPage.closeBrowser();
});
