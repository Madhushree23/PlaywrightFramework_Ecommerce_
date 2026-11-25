import { test, expect } from '../fixtures/test-fixtures.js';
import Customer from '../testdata/checkout.json' with { type: 'json' };
import Products from '../testdata/products.json' with { type: 'json' };

test('user can complete the checkout process', async ({
  page, authenticatedPage, inventoryPage, cartPage, checkoutPage
}) => {
  await inventoryPage.addProductToCart(Products.products.backpack);
  await inventoryPage.openCart();
  await cartPage.checkout();

  await checkoutPage.enterCustomerDetails(
    Customer.customer.firstName,
    Customer.customer.lastName,
    Customer.customer.postalCode
  );
  await checkoutPage.continueToOverview();

  await expect(page.locator('.cart_item'))
    .toContainText(Products.products.backpack);

  await checkoutPage.finishOrder();

  await expect(checkoutPage.completeHeader)
    .toHaveText('Thank you for your order!');
});