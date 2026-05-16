import { test, expect } from '@playwright/test';


test('repeated test', async ({ page }) => {
   test.setTimeout(100000);
  await page.goto('https://www.youtube.com/');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('playwright by testers talk');
  await page.getByRole('combobox', { name: 'Search' }).press('Enter');
  //span[contains(text(),'Playwright by Testers Talk ✅')]
   //await page.waitForLoadState('networkidle');
  await expect(page.locator("span:has-text('Playwright by Testers Talk')")).toBeVisible();

});

/*
 for run the failed testcase again automatically - >
 go to playwright.config.js - > in that change the number of retry as 1,2 ..
"" retries: process.env.CI ? 2 : 1, "" //this is for run the test again 1 time again after the testcase failed.

*/