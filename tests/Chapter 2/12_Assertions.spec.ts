import{test,expect} from '@playwright/test';
import { title } from 'process';

test('assertions', async ({ page }) => {

  await page.goto('https://www.youtube.com/');

  //visible , enabled, empty, editable
  /*
  await expect (page.getByPlaceholder('Search')).toBeVisible();
 await expect (page.getByPlaceholder('Search')).toBeEnabled();
 await expect (page.getByPlaceholder('Search')).toBeEmpty();
 await expect (page.getByPlaceholder('Search')).toBeEditable();

*/
 //URL check 
 await page.getByPlaceholder('Search', {exact:true}).first().click();
 await page.getByPlaceholder('Search', {exact:true}).first().fill('playwright by testers talk');
 await page.getByPlaceholder('Search', {exact:true}).first().press('Enter');
//await expect(page).toHaveURL('https://www.youtube.com/results?search_query=playwright+by+testers+talk');

//text check 
await expect(page.locator('//span[@id="title"]')).toHaveText('People also watched');

await expect(page.locator('//span[@id="title"]')).toHaveCount(1);
//await expect(page.locator('(//span[@id="title"])[1]')).toBeDisabled(); -> currently can't use this disabled mathoed for span , text but can use for button ,input, slect , textarea


})   