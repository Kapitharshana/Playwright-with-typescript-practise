import { test, expect } from '@playwright/test';

test('check the title', async ({ page }) => {
  await page.goto('https://demo.nopcommerce.com/');

  let titlepage:string = await page.title();
  console.log("titlepage: " , titlepage);


  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(" nopCommerce demo store. Home page title");
});
