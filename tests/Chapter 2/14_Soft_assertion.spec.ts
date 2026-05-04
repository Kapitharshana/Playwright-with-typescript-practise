import{test,expect} from '@playwright/test';
import { title } from 'process';

test('Soft assertions', async ({ page }) => {

  await page.goto('https://www.youtube.com/');


 //URL check 
 await page.getByPlaceholder('Search', {exact:true}).first().click();
 await page.getByPlaceholder('Search', {exact:true}).first().fill('playwright by testers talk');
 await page.getByPlaceholder('Search', {exact:true}).first().press('Enter');
//await expect(page).toHaveURL('https://www.youtube.com/results?search_query=playwright+by+testers+talk');

await expect.soft(page).toHaveTitle('playwright talk - YouTube'); //this one os wrong but we mention it as soft , so the rest of the codes will be executed wihtout any problem and at the end of the test it will show us that this assertion is failed but the rest of the assertions are passed
//text check 
await expect(page.locator('//span[@id="title"]')).toHaveText('People also watched');

await expect(page.locator('//span[@id="title"]')).toHaveCount(1);
await expect(page.locator('(//span[@id="title"])[1]')).toBeDisabled(); //-> currently can't use this disabled mathoed for span , text but can use for button ,input, slect , textarea



})   