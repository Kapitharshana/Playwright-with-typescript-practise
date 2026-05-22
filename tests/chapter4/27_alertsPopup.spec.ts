import {test,expect} from '@playwright/test';

test('popup handling', async({page}) => {

await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/#alerts');


//dialog event is used to handle the popups in playwright
page.once('dialog', async dialog => {
console.log('popup type is : ' + dialog.type());
    dialog.accept(); //to click on ok button of the popup
    console.log('alert message is : ' + dialog.message());

})

await page.getByText('See an example alert', {exact: true}).click();

});

test('popup caancel', async({page}) => {

await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/#alerts');


//dialog event is used to handle the popups in playwright
page.once('dialog', async dialog => {

console.log('popup type is : ' + dialog.type());
    dialog.dismiss(); //to click on cancel button of the popup
    console.log('alert message is : ' + dialog.message());

})

await page.getByText('See a sample confirm', {exact: true}).click();

}); //

test('popup enter text', async({page}) => {

await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/#alerts');


//dialog event is used to handle the popups in playwright
page.once('dialog', async dialog => {

    console.log('popup type is : ' + dialog.type());
    dialog.accept('hello'); 
    console.log('alert message is : ' + dialog.message());

})

await page.getByText('See a sample prompt', {exact: true}).click();

});