import {test, expect, Locator } from "@playwright/test";


//1.page.getByAltText() to locate an element, usually image, by its text alternative.
test('alt logo title' , async ({page}) =>{
    await page.goto('https://demo.nopcommerce.com/');

   /* 
const logo:Locator= page.getByAltText('nopCommerce demo store');
 await logo.click();

 await expect(logo).toBeVisible();
     //await expect(page.getByAltText('nopCommerce demo store')).toBeVisible();


//2.page.getByText() to locate by text content.
//locate by visible text 
//USe this for non interactive element like heading, paragraph, span .div, span, p ,etc
//for interactive elements like button, link, checkbox, radio button, etc use getByRole() method

const name:Locator= page.getByText('Welcome to our store');
    await expect(name).toBeVisible();



//3.page.getByRole() to locate by explicit and implicit accessibility attributes.
await page.getByRole('link', {name:'Register'}).click();
await expect (page.getByRole('link', {name:'Register'})).toBeVisible();


//4.page.getByLabel() to locate by form control labels.
await page.getByLabel('First name:').fill('kapi');
await page.getByLabel('Last name:').fill('tharshana');
await page.getByLabel('Email:').fill('kapi');


//5.page.getByPlaceholder() to locate by placeholder text in input fields.
await page.getByPlaceholder('Search store').fill('computer');


//6.page.getByTitle() to locate by page title
//page.getByTitle('Bash Tutorial')

//await expect(page.getByTitle('Bash Tutorial')).toHaveText('Bash');

await page.goto('https://www.w3schools.com/');
await page.getByTitle('Bash Tutorial').nth(0).click();

*/

//7.page.getByTestId() to locate by custom data-testid attribute.
///page.getByTestId('newsletter-email').fill('kapi');
//when this test-id was changed in the OG code like just update it in the playwright.config.js , Not the value but the name test id

})




