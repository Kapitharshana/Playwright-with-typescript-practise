import {test, expect, Locator } from "@playwright/test";
   

/* Go to google.com
type playwright by testrs talk and search it
click on the first link
verify the title of the page 
*/


test('class 01', async ({page}) => {
    
await page.goto('https://www.google.com');
await page.getByRole('combobox', { name: 'Search' }).fill('playwright by testers talk');
await page.getByRole('combobox', { name: 'Search' }).press('Enter');




})