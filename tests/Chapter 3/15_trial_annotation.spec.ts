import { test, expect } from '@playwright/test';

/* Go to google.com
type playwright by testrs talk and search it
click on the first link
verify the title of the page 
*/



test('test 01', async ({page}) => {
    
await page.goto('https://www.youtube.com/playlist?list=PLUeDIlio4THEgPRVJRqZRS8uw8hhVNQCM');

await expect(page.getByRole('link', { name: '#1 Playwright Tutorial Full' })).toBeVisible();
await expect(page.getByRole('link', { name: '#2 Playwright API Testing' })).toBeVisible();

})

//skip the one test case 
/*test.skip('test 02', async ({page}) => {
    
await page.goto('https://www.youtube.com/playlist?list=PLUeDIlio4THEgPRVJRqZRS8uw8hhVNQCM');

await expect(page.getByRole('link', { name: '#1 Playwright Tutorial Full' })).toBeVisible();
await expect(page.getByRole('link', { name: '#2 Playwright API Testing' })).toBeVisible();

})
*/

//run only the test case when there are lots of testcases
/*test.only('test 03', async ({page}) => {
    
await page.goto('https://www.youtube.com/playlist?list=PLUeDIlio4THEgPRVJRqZRS8uw8hhVNQCM');

await expect(page.getByRole('link', { name: '#1 Playwright Tutorial Full' })).toBeVisible();
await expect(page.getByRole('link', { name: '#2 Playwright API Testing' })).toBeVisible();

})

*/
