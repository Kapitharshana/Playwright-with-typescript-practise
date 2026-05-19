import { test,expect } from '@playwright/test';

const keywords= ['playwright by testers talk', 'Cypress by Testers Talk', 'API Testing by Testers Talk'];
for (const keyword of keywords) {

test(`parameter test ${keyword}`, async ({ page }) => {
   
  await page.goto('https://www.youtube.com/');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill(keyword);
  await page.getByRole('combobox', { name: 'Search' }).press('Enter');
  
  //await expect(page.getByText(keyword)).toBeVisible(); 
  await expect(page.getByText(keyword)  ).toBeVisible({timeout:5000}); 

   /*
   from playwright.config.ts 
   timeout:1*60*1000,

expect: {
  timeout:10000
}, here the total waiting time is 60sec , within that time the 10 sec also considered .
Inside that 60 sec:

page load
clicks
fill
search
expect waiting (up to 10 sec)

all are counted together.
//Playwright will wait maximum 10 seconds for the expected element to become visible.(but wihtin the gloabl timeout time)

//next :
So if you have:

await expect(element1).toBeVisible();
await expect(element2).toBeVisible();

and:

expect: {
  timeout: 10000
}

then:

First expect() can wait up to 10 sec
Second expect() can also wait up to 10 sec

So together they may take up to 20 sec total.



*/

});

}
