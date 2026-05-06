import{test,expect} from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.youtube.com/');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('learn playwright with typescript');
  await page.getByRole('combobox', { name: 'Search' }).press('Enter');
  await expect(page.getByRole('link', { name: 'Learn Playwright with' })).toBeVisible();
});


/*This code was taken by typing the code through termminal which is 
npx playwright codegen 
*/