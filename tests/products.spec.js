import { test, expect } from '../fixtures/test-fixtures.js';
import Products from '../testdata/products.json' with { type: 'json' };

test.describe('Product listing', () => {
  test('user can sort products by name from A to Z', async ({
    authenticatedPage, inventoryPage
  }) => {
    await expect(inventoryPage.pageTitle).toHaveText('Products');

    await inventoryPage.sortProducts('az');
    const names = await inventoryPage.getProductNames();

    expect(names).toEqual([...names].sort((a, b) => a.localeCompare(b)));
  });

  test('user can sort products by price from low to high', async ({
    authenticatedPage, inventoryPage
  }) => {
    await inventoryPage.sortProducts('lohi');

    const prices = await authenticatedPage.locator('.inventory_item_price')
      .allTextContents();
    const numericPrices = prices.map(price => Number(price.replace('$', '')));

    expect(numericPrices).toEqual([...numericPrices].sort((a, b) => a - b));
  });

  test('user can add a product to the cart', async ({
    authenticatedPage, inventoryPage
  }) => {
    await inventoryPage.addProductToCart(Products.products.backpack);

    await expect(inventoryPage.cartBadge).toHaveText('1');
  });

  test('user can remove a product from the inventory page', async ({
    authenticatedPage, inventoryPage
  }) => {
    await inventoryPage.addProductToCart(Products.products.backpack);
    await inventoryPage.removeProductFromCart(Products.products.backpack);

    await expect(inventoryPage.cartBadge).toHaveCount(0);
  });
});