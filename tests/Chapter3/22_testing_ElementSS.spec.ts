import { test,expect } from '@playwright/test';

test('testing element screenshot', async({page}) =>{
    await page.goto('https://github.com/login');
    await expect(page).toHaveScreenshot('github-login.png'); 

    const element  = page.locator("(//div[@class='authentication-body authentication-body--with-form new-session'])[1]");
    await expect(element).toHaveScreenshot('github-form.png');

    await page.locator('#login_field').fill('test');
    await expect(element).toHaveScreenshot('github-loginn.png'); 

});