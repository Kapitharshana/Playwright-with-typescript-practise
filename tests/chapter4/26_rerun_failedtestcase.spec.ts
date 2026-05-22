import { test, expect } from '@playwright/test';


test('test1', async ({ page }) => {
   test.setTimeout(120000);
  await page.goto('https://www.youtube.com/');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('playwright by testers talk');
  await page.getByRole('combobox', { name: 'Search' }).press('Enter');
  await expect(page.locator("span:has-text('Playwright by Testers Talk')")).toBeVisible();

});
 
test('test2', async ({ page }) => {
   expect(true).toBe(true);

});

test('test3', async ({ page }) => {
   expect(true).toBe(true);

});

/* intentionally failing the testcase to check the rerun failed testcases  
 //for that running the code in terminal which is : npx playwright test 'testacse name ' --last-failed   
 //should enter the testcase name also , then only the testcase will work otherwise no
test('test2', async ({ page }) => {
   expect(true).toBe(false);

});

test('test3', async ({ page }) => {
   expect(true).toBe(false);

});
*/