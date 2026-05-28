import{test,expect} from '@playwright/test';


test('testcontent ', async ({ page }) => {
   //test.setTimeout(1200000);
  await page.goto('https://github.com/Kapitharshana');
  
  const name= await page.locator('[itemprop="additionalName"]').textContent();
  const fullname= name?.trim();
  console.log('full name is : ' + fullname);
  expect(fullname).toBe('Kapitharshana');

  const attribute= await page.getByTestId('repositories').first().getAttribute('data-selected-links');
  console.log('attribute value is : ' + attribute);
});
