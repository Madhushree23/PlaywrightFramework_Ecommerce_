export default class CartPage {
  constructor(page) {
    this.page = page;
    this.cartItems = page.locator('.cart_item');
    this.checkoutButton = page.locator('[data-test="checkout"]');
    this.continueShoppingButton = page.locator('[data-test="continue-shopping"]');
  }

  async removeProduct(productName) {
    const item = this.cartItems.filter({ hasText: productName });
    await item.locator('button').click();
  }

  async checkout() {
    await this.checkoutButton.click();
  }

  async getCartProductNames() {
    return this.page.locator('.inventory_item_name').allTextContents();
  }
}