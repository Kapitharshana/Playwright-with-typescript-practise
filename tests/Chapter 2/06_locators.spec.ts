import{test,expect} from '@playwright/test';

test('locators', async ({ page }) => {

 /* await page.goto('https://github.com/Kapitharshana');

  await page.getByRole('link', { name: 'Sign in' }).click();

  await page.getByText('Sign up').click();

  await expect (page.getByAltText("View Kapitharshana's full-sized avatar")).toBeVisible();

  await page.getByTestId('repositories').first().click();

  //await page.getByLabel('Homepage').first().click();;
 
  //Use placeholder 

  await page.getByPlaceholder('Search or jump to...').click();
  ///here can't use fill using plaaceholder option bcz this search bar is a button

  //use x path  ]
  await page.locator("//button[@placeholder='Search or jump to...']").click();

  //use css selector 
  await page.locator("button[placeholder='Search or jump to...']").click();
*/


  //await page.getByPlaceholder('Search or jump to...').click();
  //here can't use fill using plaaceholder option bcz this search bar is a button

  //use x path  
  //await page.locator("//button[@placeholder='Search or jump to...']").click();

  //use css selector 
  await page.locator("button[placeholder='Search or jump to...']").click();



 await page.goto('https://www.youtube.com');
 //await page.getByPlaceholder('Search').fill("testers talk");
 //await page.locator("//input[@placeholder='Search']").fill("testers talk"); //xpath
 //await page.locator("input[placeholder='Search']").fill("testers talk");    //css selector
})