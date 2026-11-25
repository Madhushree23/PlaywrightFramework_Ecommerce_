import { test, expect } from '../fixtures/test-fixtures.js';
import Users from '../testdata/users.json' with { type: 'json' };

test.describe('SauceDemo authentication', () => {
  test('user can log in with valid credentials', async ({ page, loginPage, inventoryPage }) => {
    await loginPage.goto();
    await loginPage.login(Users.standard.username, Users.standard.password);

    await expect(page).toHaveURL(/inventory\.html/);
    await expect(inventoryPage.pageTitle).toHaveText('Products');
  });
 
  test('locked-out user sees an error message', async ({ loginPage }) => {
    await loginPage.goto();
    await loginPage.login(Users.lockedOut.username, Users.lockedOut.password);

    await expect(loginPage.errorMessage)
      .toContainText('Sorry, this user has been locked out');
  });

  test('invalid credentials show an error message', async ({ loginPage }) => {
    await loginPage.goto();
    await loginPage.login(Users.invalid.username, Users.invalid.password);

    await expect(loginPage.errorMessage)
      .toContainText('Username and password do not match');
  });
});