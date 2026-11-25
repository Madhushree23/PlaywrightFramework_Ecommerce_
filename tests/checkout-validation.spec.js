import { test, expect } from '../fixtures/test-fixtures.js';
import Products from '../testdata/products.json' with { type: 'json' };

test('checkout requires customer information', async ({
  authenticatedPage, inventoryPage, cartPage, checkoutPage
}) => {
  await inventoryPage.addProductToCart(Products.products.backpack);
  await inventoryPage.openCart();
  await cartPage.checkout();

  await checkoutPage.continueToOverview();

  await expect(checkoutPage.errorMessage)
    .toContainText('First Name is required');
});