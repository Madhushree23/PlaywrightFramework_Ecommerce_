export default class InventoryPage {
  constructor(page) {
    this.page = page;
    this.pageTitle = page.locator('[data-test="title"]');
    this.sortDropdown = page.locator('[data-test="product-sort-container"]');
    this.cartLink = page.locator('[data-test="shopping-cart-link"]');
    this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');
    this.inventoryItems = page.locator('.inventory_item');
  }

  async addProductToCart(productName) {
    const product = this.inventoryItems.filter({ hasText: productName });
    await product.locator('button').click();
  }

  async removeProductFromCart(productName) {
    const product = this.inventoryItems.filter({ hasText: productName });
    await product.locator('button').click();
  }

  async sortProducts(optionValue) {
    await this.sortDropdown.selectOption(optionValue);
  }

  async getProductNames() {
    return this.page.locator('.inventory_item_name').allTextContents();
  }

  async openCart() {
    await this.cartLink.click();
  }
}