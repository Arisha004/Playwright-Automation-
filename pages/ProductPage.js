export class ProductPage {
  constructor(page) {
    this.page = page;
    this.freeShippingLabel = this.page.locator('text="Free Shipping", text="Free delivery", :has-text("Free Delivery")');
    this.outOfStockLabel = this.page.locator('text="Out of stock", text="Sold Out"');
  }

  async hasFreeShipping() {
    try {
      return (await this.freeShippingLabel.count()) > 0;
    } catch {
      return false;
    }
  }

  async isOutOfStock() {
    try {
      return (await this.outOfStockLabel.count()) > 0;
    } catch {
      return false;
    }
  }
}
