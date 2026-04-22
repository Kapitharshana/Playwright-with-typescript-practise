import{test,expect} from '@playwright/test';

test('locators', async ({ page }) => {
  await page.goto('https://github.com/Kapitharshana');

  //await page.getByRole('link', { name: 'Sign in' }).click();

  //await page.getByText('Sign up').click();

  //await expect (page.getByAltText("View Kapitharshana's full-sized avatar")).toBeVisible();

  //await page.getByTestId('repositories').first().click();

  await page.getByLabel('Homepage').first().click();;
 

})