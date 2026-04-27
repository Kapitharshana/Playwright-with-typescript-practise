import{test,expect} from '@playwright/test';

test('dropdown', async ({ page }) => {

  await page.goto('https://jqueryui.com/droppable/');

  const framepage= page.frameLocator('[class="demo-frame"]')

const dragitem = framepage.locator('[id="draggable"]');
const dropitem= framepage.locator('[id="droppable"]');

await dragitem.dragTo(dropitem);

})