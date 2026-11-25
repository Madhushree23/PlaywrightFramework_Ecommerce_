import { test, expect } from '../fixtures/test-fixtures.js';
import Products from '../testdata/products.json' with { type: 'json' };

test.describe('Shopping cart', () => {
  test('added product is displayed in the cart', async ({
    authenticatedPage, inventoryPage, cartPage
  }) => {
    await inventoryPage.addProductToCart(Products.products.backpack);
    await inventoryPage.openCart();

    await expect(cartPage.cartItems).toHaveCount(1);
    await expect(cartPage.cartItems.first())
      .toContainText(Products.products.backpack);
  });

  test('user can remove a product from the cart', async ({
    authenticatedPage, inventoryPage, cartPage
  }) => {
    await inventoryPage.addProductToCart(Products.products.bikeLight);
    await inventoryPage.openCart();
    await cartPage.removeProduct(Products.products.bikeLight);

    await expect(cartPage.cartItems).toHaveCount(0);
  });
}); 