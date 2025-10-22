import {test,expect} from "@playwright/test";

test('rurj', async({page}) => {
    await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');
    
    page.once('dialog', dialog => {
        console.log(dialog.message());
        console.log(dialog.type());

        dialog.accept();
    })
    await page.getByText('See an example alert',{exact:true}).click();
})
test('second popup', async({page}) =>{
    await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');
    
    page.once('dialog', dialog => {
        console.log(dialog.message());
        console.log(dialog.type());
        dialog.dismiss();
    })
    await page.getByText('See a sample confirm', {exact:true}).click();
})
test('thri prompt', async({page}) => {
    await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');
    page.once('dialog', async(dialog) =>{
        await dialog.accept('playwithme')
        console.log(dialog.message());
        console.log(dialog.type());

    })
    await page.getByText('See a sample prompt',{exact:true}).click();
})