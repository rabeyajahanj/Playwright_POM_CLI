import { test, expect } from '@playwright/test';
import { readFileSync } from 'node:fs';
import { LoginPage } from '../pages/LoginPage.js';
import { InventoryPage } from '../pages/InventoryPage.js';

const users = JSON.parse(readFileSync(new URL('../data/users.json', import.meta.url), 'utf-8'));

users.forEach((user, index) => {
  test(`Login case ${index + 1}: ${user.username} / ${user.password} -> ${user.expected}`, async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.BrowserOpen();
    await loginPage.login(user.username, user.password);

    if (user.expected === 'success') {
      expect(await inventoryPage.isLoaded()).toBe(true);
    } else {
      const message = await loginPage.getErrorMessage();
      expect(message.length).toBeGreaterThan(0);
    }
  });
});