import {test, expect} from "@playwright/test";

const keywords = ['playwright by testers talk','cypress by testers talk', 'api testing by testers talk','selenium by testers talk'];

for (const keyword of keywords) {
    test(`parameters is ${keyword}`, async({page})=>{
    await page.goto('https://www.youtube.com/');
    await page.getByPlaceholder('Search', {exact: true}).first().fill(keyword);
    await page.getByPlaceholder('Search', {exact: true}).press('Enter');

    await expect(page.getByPlaceholder('Search',{exact:true})).toHaveText(keyword);

    await expect(page).toHaveTitle(`${keyword} + 'YouTube'`);
    }) 
}
