import { test, expect } from '@playwright/test';
import { ProductPage } from '../pages/ProductPage';
import { LoginPage } from '../pages/LoginPage';

test.describe('Logout Process', () => {
  let loginPage: LoginPage;
  let productPage: ProductPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    productPage = new ProductPage(page);
    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce');
  });

  test('Logout and Redirect to Login', async () => {
    // Simulate logout
    await productPage.page.click('.bm-burger-button');
    await productPage.page.click('#logout_sidebar_link');

    // Verify user is redirected to the login page
    await expect(loginPage.page).toHaveURL('https://www.saucedemo.com/');
  });
});
