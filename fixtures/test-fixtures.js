import { test as base, expect } from '@playwright/test';
import LoginPage from '../Pages/LoginPage.js';
import InventoryPage from '../Pages/InventoryPage.js';
import CartPage from '../Pages/CartPage.js';
import CheckoutPage from '../Pages/CheckoutPage.js';
import Users from '../testdata/users.json' with { type: 'json' };

export const test = base.extend({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  inventoryPage: async ({ page }, use) => {
    await use(new InventoryPage(page));
  },

  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },

  checkoutPage: async ({ page }, use) => {
    await use(new CheckoutPage(page));
  },

  authenticatedPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(Users.standard.username, Users.standard.password);
    await page.waitForURL('**/inventory.html');
    await use(page);
  }
});

export { expect };