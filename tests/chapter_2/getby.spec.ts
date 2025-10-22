import { expect, test } from "@playwright/test";

test.setTimeout(180000);
test( 'using things to get', async({page}) => {

    await page.goto('https://www.google.com/');
    await page.getByTitle('Search by image').click();

    // await page.getByPlaceholder('ytSearchboxComponentInputBox').click();
    // await page.locator('input[@name="search_query"]').fill('hello');
    // await page.locator('input[name="search_query"]').press('Enter');

    
});
