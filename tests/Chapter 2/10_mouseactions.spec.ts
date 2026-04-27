import{test,expect} from '@playwright/test';

test('mouse actions', async ({ page }) => {

  //await page.goto('https://www.google.com/search?q=playwright+by+testers+talk');


await page.goto('https://www.google.com/search?q=playwright+by+testers+talk');
 
//Right mouse click
//await page.getByRole('link', { name: 'Playwright by Testers Talk' }).first().click({button: 'right'});

//Left mouse click
//await page.getByRole('link', { name: 'Playwright by Testers Talk' }).first().click({button: 'left'});

//middle mouse click
//await page.getByRole('link', { name: 'Playwright by Testers Talk' }).first().click({button: 'middle'});

//mousehover
await page.getByLabel('Search by voice').hover();

//double click
await page.getByLabel('Search by voice').dblclick();


})