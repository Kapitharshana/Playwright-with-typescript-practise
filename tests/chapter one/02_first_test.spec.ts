import { test, expect } from '@playwright/test';

/* Go to google.com
type playwright by testrs talk and search it
click on the first link
verify the title of the page 
*/


test('class 01', async ({page}) => {
    
await page.goto('https://www.google.com');
await page.getByRole('combobox', { name: 'Search' }).fill('playwright by testers talk');
await page.getByRole('combobox', { name: 'Search' }).press('Enter');

//await page.getByRole('link', { name: 'Playwright by Testers Talk YouTube · Testers Talk 29.2K+ followers' }).first().click();
await page.getByRole('link', { name: /Playwright by Testers Talk/i }).first().click();

await expect(page).toHaveTitle("Playwright by Testers Talk ✅ - YouTube");

})