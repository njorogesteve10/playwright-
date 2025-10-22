import  { test,expect } from '@playwright/test';
test.setTimeout(80000);
test('playing with keys', async({page}) => {
    await page.goto('https://www.google.com/');
    await page.getByLabel('Search').first().click();
    await page.keyboard.press('Ctrl+a');
    await page.keyboard.press('Delete');   
})