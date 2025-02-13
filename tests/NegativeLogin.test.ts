import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductPage } from '../pages/ProductPage';

[
  { Description: 'Problem user',username:'problem_user',password:'secret_sauce',expectedMessage:'Epic sadface: Username and password do not match any user in this service' },
  { Description: 'Locked out user',username:'locked_out_user',password:'secret_sauce',expectedMessage:'Epic sadface: Sorry, this user has been locked out.' }
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
    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).toBe(expectedMessage);
  });
 
});
});
