import { test, expect } from '@playwright/test';


test('repeated test', async ({ page }) => {
   test.setTimeout(100000);
  await page.goto('https://www.youtube.com/');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('learn playwright with typescript');
  await page.getByRole('combobox', { name: 'Search' }).press('Enter');
  //await expect(page.getByRole('link', { name: 'Learn Playwright with' })).toBeVisible();
});