import {test,expect} from '@playwright/test';

test('new brwser create', async ({ page, browser }) => {
   test.setTimeout(100000);
  await page.goto('https://www.youtube.com/');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('playwright by testers talk');
  await page.getByRole('combobox', { name: 'Search' }).press('Enter');
 
  await expect(page.locator("span:has-text('Playwright by Testers Talk')")).toBeVisible();


  //opening a new browser and run this code in that new browser
  const newcontext= await browser.newContext();
  const page2 = await newcontext.newPage();

  test.setTimeout(100000);
  await page2.goto('https://www.youtube.com/');
  await page2.getByRole('combobox', { name: 'Search' }).click();
  await page2.getByRole('combobox', { name: 'Search' }).fill('playwright by testers talk');
  await page2.getByRole('combobox', { name: 'Search' }).press('Enter');
 
  await expect(page2.locator("span:has-text('Playwright by Testers Talk')")).toBeVisible();

 // opening new tab in the previous page 
 const newtab = await newcontext.newPage();
  await newtab.goto('https://www.youtube.com/');
  await newtab.getByRole('combobox', { name: 'Search' }).click();
  await newtab.getByRole('combobox', { name: 'Search' }).fill('playwright by testers talk');

});