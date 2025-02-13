import { Page, expect } from '@playwright/test';

export class ProductPage {
  constructor(public page: Page) {}

  private addToCartButtons = '.btn_inventory';
  private cartIcon = '.shopping_cart_link';

  async navigate() {
    await this.page.goto('https://www.saucedemo.com/inventory.html');
  }

  //change this method to accept the number/int of items you want to add and do a loop adding those items those items
  async addItemToCart(itemIndex: number) {
    const buttons = await this.page.$$(this.addToCartButtons);
    await buttons[itemIndex].click();
  }
  async addItemsToCart(numberOfItems: number) {
    const buttons = await this.page.$$(this.addToCartButtons);
    
    // Loop through and add the specified number of items to the cart
    for (let i = 0; i < numberOfItems; i++) {
      if (i < buttons.length) {
        await buttons[i].click();
      } else {
        console.log('Not enough items available to add.');
        break;
      }
    }
  }
  
  async getCartItemCount() {
    const cartText = await this.page.textContent(this.cartIcon);
    const match = cartText?.match(/\d+/);
    return match ? parseInt(match[0], 10) : 0;
  }

  async goToCart() {
    await this.page.click(this.cartIcon);
  }

  async verifyCartItemsQuantity(cartCountItems: number){
    const itemCount = await this.getCartItemCount();
    expect(itemCount).toBe(cartCountItems);
  }
}
