import { Page } from '@playwright/test';

export class CartPage {
  constructor(public page: Page) {}

  private checkoutButton = '.checkout_button';

  async proceedToCheckout() {
    await this.page.click(this.checkoutButton);
  }
}
