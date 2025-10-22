import {test,expect} from "@playwright/test";
test.setTimeout(90000);
test('compaing screenshot', async({page}) =>{
    await page.goto('https://github.com/njorogesteve10/water-shader#');

    await expect(page).toHaveScreenshot('fuhessry.png');
    await page.locator('#input').fill('na scammmerrrer');
    await expect(page).toHaveScreenshot('essssmai.png');

    const element = await page.locator('[id = "block"]');
    expect(element).toHaveScreenshot('worsteverbech.png');

    await page.locator('#input').fill('na scammmerrrer');
    expect(element).toHaveScreenshot('worsteverbech.png');
})