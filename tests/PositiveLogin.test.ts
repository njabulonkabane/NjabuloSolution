import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductPage } from '../pages/ProductPage';

[
  { Description: 'Standard user',username:'standard_user',password:'secret_sauce',expectedMessage:'' },
 ].forEach(({ Description,username,password,expectedMessage }) => {
test.describe(`Login Tests - ${Description}`, () => {
  let loginPage: LoginPage;
  let productPage: ProductPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    productPage = new ProductPage(page);
    await loginPage.navigate();
  });

  test(`Login with - ${Description}`, async () => {
    await loginPage.login(username, password);
    await expect(productPage.page).toHaveURL('https://www.saucedemo.com/inventory.html');
  });
 
});
});