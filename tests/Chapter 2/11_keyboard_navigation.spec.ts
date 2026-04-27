import{test,expect} from '@playwright/test';

test('keyboard navigation', async ({ page }) => {

  await page.goto('https://www.google.com');

  //enter action from keyboard
  //await page.getByLabel('Search', {exact: true}).first().click(); 
  //await page.getByLabel('Search', {exact: true}).first().fill("playwright by testers talk"); 
  //await page.getByLabel('Search', {exact: true}).first().press('Enter');

  //contol key and delete button
  //await page.getByLabel('Search', {exact: true}).first().click(); 
  //await page.keyboard.press('Control+A');

  //tab and enter 
  await page.getByLabel('Search', {exact: true}).first().click(); 
  await page.keyboard.press('Tab');
  await page.keyboard.press('Enter');
}) 