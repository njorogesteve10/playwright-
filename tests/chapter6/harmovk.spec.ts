
import {test, expect} from "@playwright/test";

test('har recording and mocking', async({page}) =>{
    await page.routeFromHAR(',.har/fruits.har',{
       url: "*/**/api/v1/fruits",
        update:false,
    })
    await page.goto('https://demo.playwright.dev/api-mocking/');
     await expect(page.getByText('strawberry')).toBeVisible();
     await expect(page.getByText('ITSFITY')).toBeVisible();
     await expect(page.getByText('HOV')).toBeVisible();
     await expect(page.getByText('LETSGETIT')).toBeVisible();

})