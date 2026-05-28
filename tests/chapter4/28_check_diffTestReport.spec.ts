import{test,expect} from '@playwright/test';

test.describe("smoke testing" ,  () =>{

test('test1', async ({ page }) => {
   test.setTimeout(1200000);
  await page.goto('https://www.youtube.com/');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('learn playwright with typescript');
  await page.getByRole('combobox', { name: 'Search' }).press('Enter');
  await expect(page.getByRole('link', { name: 'Learn Playwright with' })).toBeVisible();
});

});

test.describe("regression testing" , () =>{

test('test2', async ({ page }) => {
  test.setTimeout(1200000);
  await page.goto('https://www.youtube.com/');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('learn playwright with typescript');
  await page.getByRole('combobox', { name: 'Search' }).press('Enter');
  await expect(page.getByRole('link', { name: 'Learn Playwright with' })).toBeVisible();
  
});

test('test3', async ({ page }) => {
  test.setTimeout(60000);
  await page.goto('https://www.youtube.com/');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('learn playwright with typescript');
  await page.getByRole('combobox', { name: 'Search' }).press('Enter');
  await expect(page.getByRole('link', { name: 'Learnhello Playwright with' })).toBeVisible();
  
});


});



/*go to playwright config.tes and write 
['json', {outputFile: 'test-resuts.json'}] in reporter array to generate json report and then we can compare the json report with the expected report to check the difference between them.
['list'] this is like html but the test eport we can see in the console output.
*/