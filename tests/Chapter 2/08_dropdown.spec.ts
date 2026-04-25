import{test,expect} from '@playwright/test';

test('dropdown', async ({ page }) => {
/*
  await page.goto('https://www.facebook.com/');
  await page.getByLabel("Create new account").click();

  //select dropdown using  value
  //await page.getByRole('combobox', { name: 'Month' }).selectOption('5'); // here it is not accepted bcz in the facebook page theey use combo box instead of select ooption , wo playwright restrict the selectOption methoed here.
await page.getByRole('combobox', { name: 'Month' }).click();
// 2. Click the option
await page.getByRole('option', { name: 'May' }).click();
*/

})

test('dropdown2', async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com/');
  
  //select dropdown using value
  //await page.locator('#country').selectOption({ index: 3 });

  //select dropdown using visible text
  //await page.locator('#colors').selectOption('Yellow');

  //validate all the options
  //await expect(page.locator('#colors > option')).toHaveText(['Red','Blue','Green','Yellow','Red','White','green']);

const colors = page.locator('#colors > option');

await expect(colors).toHaveText([
  'Red',
  'Blue',
  'Green',
  'Yellow',
  'Red',
  'White',
  'Green'
]);



})

