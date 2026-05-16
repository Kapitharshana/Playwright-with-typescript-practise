import{test,expect} from '@playwright/test';

test('test1 @regression', async ({ page }) => {
   test.setTimeout(60000);
  await page.goto('https://www.youtube.com/');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('learn playwright with typescript');
  await page.getByRole('combobox', { name: 'Search' }).press('Enter');
  //await expect(page.getByRole('link', { name: 'Learn Playwright with' })).toBeVisible();
});


test('test2 @smoke @regression', async ({ page }) => {
   test.setTimeout(80000);
  await page.goto('https://www.youtube.com/');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('learn playwright with typescript');
  await page.getByRole('combobox', { name: 'Search' }).press('Enter');
  //await expect(page.getByRole('link', { name: 'Learn Playwright with' })).toBeVisible();
});


test('test3 @smoke', async ({ page }) => {
   test.setTimeout(80000);
  await page.goto('https://www.youtube.com/');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('learn playwright with typescript');
  await page.getByRole('combobox', { name: 'Search' }).press('Enter');
  await expect(page.getByRole('link', { name: 'Learn Playwright with' })).toBeVisible();
});