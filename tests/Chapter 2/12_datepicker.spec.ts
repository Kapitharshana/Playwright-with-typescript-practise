import{test,expect} from '@playwright/test';

test('date picker', async ({ page }) => {

  await page.goto('https://jqueryui.com/datepicker/');

  const iframepage = page.frameLocator('[class="demo-frame"]');
  //await iframepage.locator(' #datepicker').fill('04/08/2026 '); //enter manually 
   

  //selecting today date 
   await iframepage.locator('#datepicker').click();
   //await iframepage.locator('[class="ui-datepicker-days-cell-over  ui-datepicker-today"] ').click();

   //select a random date 
  //await iframepage.locator("//a[normalize-space()='22']").click();

   //await iframepage.locator('text="15"').click();

   //now sekect the previous month and select date
    await iframepage.locator('[title="Prev"]').click();
    await iframepage.locator('text="15"').click();
 
})   