
import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';
import { users } from './testData/users';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';
test.describe('SauceDemo UI Tests', () => {
  test('should login successfully with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.login(
      users.validUser.username,
      users.validUser.password
    );

    await expect(page).toHaveURL(/inventory.html/);
    await expect(page.locator('.title')).toHaveText('Products');
  });

  test('should display an error with invalid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.login(
      users.invalidUser.username,
      users.invalidUser.password
    );

    await expect(loginPage.errorMessage)
      .toContainText('Username and password do not match');
  });

  test('should add a product to the shopping cart', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.login(
      users.validUser.username,
      users.validUser.password
    );

    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
    await expect(
      page.locator('[data-test="remove-sauce-labs-backpack"]')
    ).toBeVisible();
  });

test('should complete checkout successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.navigate();
  await loginPage.login(
    users.validUser.username,
    users.validUser.password
  );

  await page.locator(
    '[data-test="add-to-cart-sauce-labs-backpack"]'
  ).click();

  await cartPage.openCart();

  await expect(page).toHaveURL(/cart.html/);
  await expect(
  page.locator('.cart_item .inventory_item_name')
).toHaveText('Sauce Labs Backpack');
  

  await cartPage.proceedToCheckout();

  await expect(page).toHaveURL(/checkout-step-one.html/);

  await checkoutPage.enterCustomerInformation(
    'Mesk',
    'Rayyes',
    'K2J 0A1'
  );

  await expect(page).toHaveURL(/checkout-step-two.html/);

  await checkoutPage.finishCheckout();

  await expect(page).toHaveURL(/checkout-complete.html/);
  await expect(checkoutPage.successMessage)
    .toHaveText('Thank you for your order!');
});

});
