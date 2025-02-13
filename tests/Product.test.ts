import { test, expect } from '@playwright/test';
import { ProductPage } from '../pages/ProductPage';
import { CartPage } from '../pages/CartPage';
import { LoginPage } from '../pages/LoginPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { generateRandomData } from '../utils/testData';


[
  { NumberofProductsToAdd: 3,username:'standard_user',password:'secret_sauce' },
  { NumberofProductsToAdd: 2,username:'standard_user',password:'secret_sauce'  },
].forEach(({ NumberofProductsToAdd,username,password }) => {
test.describe(`Product Interaction - Adding ${NumberofProductsToAdd} items`, () => {
  let productPage: ProductPage;
  let cartPage: CartPage;
  let loginPage: LoginPage;
  let checkoutPage: CheckoutPage;

  test.beforeEach(async ({ page }) => {
    productPage = new ProductPage(page);
    cartPage = new CartPage(page);
    checkoutPage = new CheckoutPage(page);
    loginPage = new LoginPage(page);

    //login with the user
    await loginPage.navigate();
    await loginPage.login(username, password);
    await expect(productPage.page).toHaveURL('https://www.saucedemo.com/inventory.html'); 

  });

    test(`Add ${NumberofProductsToAdd} Items to Cart and Checkout`, async () => {
    // Add items to cart
    await productPage.addItemsToCart(NumberofProductsToAdd); 

    // Verify cart count 
    await productPage.verifyCartItemsQuantity(NumberofProductsToAdd);

    // Proceed to checkout
    await productPage.goToCart();
    await cartPage.proceedToCheckout();

    // Fill checkout form with random strings to ensure different data is accepted
    const { randomName, randomPostalCode } = generateRandomData();
    await checkoutPage.fillCheckoutInfo(randomName, 'Test', randomPostalCode);
    await checkoutPage.finishOrder();

    // Verify confirmation
    const confirmationMessage = await checkoutPage.getConfirmationMessage();
    expect(confirmationMessage).toBe('Thank you for your order!');
  });
});
});