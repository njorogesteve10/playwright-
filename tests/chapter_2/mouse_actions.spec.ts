import {test, expect} from "@playwright/test";
test.setTimeout(180000);
test('mouse movement', async({page}) =>{
    await page.goto('https://www.google.com/search?q=playwright+by+testers+talk');

await page.getByRole('link', { name: 'Playwright by Testers Talk' }).click({button: 'left'});

    // ({button: 'left'});
    
})