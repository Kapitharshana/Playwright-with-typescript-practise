//here use the parameters to run the code 

import { test, expect } from '@playwright/test';
const keywords= ['playwright by testers talk', 'Cypress by Testers Talk', 'API Testing by Testers Talk'];
for (const keyword of keywords) {

test(`parameter test ${keyword}`, async ({ page }) => {
   test.setTimeout(120000);
  await page.goto('https://www.youtube.com/');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill(keyword);
  await page.getByRole('combobox', { name: 'Search' }).press('Enter');
  //span[contains(text(),'Playwright by Testers Talk ✅')]
   //await page.waitForLoadState('networkidle');
  //await expect(page.locator("span:has-text('Playwright by Testers Talk')")).toBeVisible();
  await expect(page.getByText(keyword)).toBeVisible();

});
}

