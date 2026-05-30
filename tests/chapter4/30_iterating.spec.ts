import{test,expect} from '@playwright/test';


test('iterating content ', async ({ page }) => {
   //test.setTimeout(1200000);
  await page.goto('https://github.com/Kapitharshana');
  /*
  const repositories = await page.locator('[class="repo"]'); // '.repo' 
  for (const repo in repositories){
    console.log('text from loop : ' + repo);
  }
    //this codes only give the opject's property name 
    locator() returns a Locator object, not an array.
for...in loops through the object's property names.
So you'll get property names, not repository texts.
*/

  const repositorieslinks = await page.$$('.repo');
  for (const repo of repositorieslinks){

    const text = await repo.textContent();
    console.log('lopp text is: ' + text);
  }
});
