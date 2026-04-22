import{test,expect} from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.youtube.com/@testerstalk');

 //first screenshot by locator 
 await page.locator('#page-header-container').screenshot({path:'./screenshot/header.png'});

 await page.screenshot({path:'./screenshot/current_page.png'});

 await page.screenshot({path:'./screenshot/full_page.png',fullPage:true });


})