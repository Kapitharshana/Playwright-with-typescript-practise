import { test,expect } from '@playwright/test';
/*
test('testing element screenshot', async({page}) =>{
    await page.goto('https://github.com/login');
    await expect(page).toHaveScreenshot('github-login.png'); 

    const element  = page.locator("(//div[@class='authentication-body authentication-body--with-form new-session'])[1]");
    await expect(element).toHaveScreenshot('github-form.png');

    await page.locator('#login_field').fill('test');
    await expect(element).toHaveScreenshot('github-loginn.png'); 

});*/ 

const keywords= ['playwright by testers talk', 'Cypress by Testers Talk', 'API Testing by Testers Talk'];
for (const keyword of keywords) {

test(`parameter test ${keyword}`, async ({ page }) => {
   
  await page.goto('https://www.youtube.com/');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill(keyword);
  await page.getByRole('combobox', { name: 'Search' }).press('Enter');
  //span[contains(text(),'Playwright by Testers Talk ✅')]
   //await page.waitForLoadState('networkidle');
  //await expect(page.locator("span:has-text('Playwright by Testers Talk')")).toBeVisible();
  await expect(page.getByText(keyword)).toBeVisible(); 

   await page.waitForTimeout(10000);
   /* this timeout also will calculated with the rest of the testcase execution . 
   for ex: from line 14 to 20 if the execution time is 30 seconds and we have given 10 seconds timeout then the total execution time will be 40 seconds.
   so  it wanna cover up within the gloabl timeout time .
   */
});

}
