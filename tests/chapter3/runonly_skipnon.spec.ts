import {test, expect} from '@playwright/test';

// test.skip('skipped', async({page}) => {
//     page.goto('http.vidcombo.com')
// })
test('runned', async({page}) =>{
    // this is local timeout global timeout is set in the playwright.config.js 
    // when you have both gobal and local timeout the file will go with local timeout and the global
    // timeout will be applicable only when there are no timeout set manually
    // assetion timeout will be set in the playwright.config which will function for validating 
    // and in cases where we are using the expect 
    await test.setTimeout(1 * 60 * 1000);
    page.goto('//http.youtube.com');
    await expect(page.getByRole('combobox',)).toBeEmpty({timeout:5000});

})
test.only('only', async({page}) =>{
   await page.goto('http//google.com');
   await expect(page.getByRole('listbox')).toBeEditable();
})