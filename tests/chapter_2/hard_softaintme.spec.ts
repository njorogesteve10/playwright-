import {test,expect} from '@playwright/test';

test('struggling but f it', async({page}) =>{
    await page.goto('http//google.com');

// soft assertion makes sure that even if the specific part of the test fails it wont prevent the rest from working
    await expect.soft(page.getByPlaceholder('Search', {exact: true})).toBeEditable();
    // hard assertion is strict and once the outcome is false the whole test fails and execute it from there and wont finish running
    await expect(page.getByPlaceholder('Search', {exact:true})).toBeVisible();
    await expect(page.getByPlaceholder('Search', {exact: true})).toContainText('win');
    await expect(page.getByPlaceholder('Search', {exact: true})).toHaveCount(3);
    await expect(page).toHaveURL('https://www.youtube.com/watch?v=788GvvcfwTY&list=PPSV');
    await expect(page.locator('div#logo')).toHaveCount(1)
})
// watch mode can be performed at the project level,spec level or test level
// once you have enabled watch mode the code will be watched or scanned so when you
// do some changes the and save the file the test will run again automatically because the 
// watch realised there were some changes and it will now run to see the effect from the changes
// to enable watch mode you click the las tbutton in the test explorer files the last after run,run debug marked as turn on continous run
