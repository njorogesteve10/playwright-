import {test, expect} from "@playwright/test";

test('loop over', async({page}) =>{
    await page.goto('https://github.com/topics/automatic-backups');
    // let allLink = page.$$('[data-turbo="false"]');
    // for(const singleLink of await allLink){
    //     const linkText = await singleLink.textContent();
    //     // console.log(linkText?.trim());
    // }

    // for (let index = 0; index < (await allLinks).length; index++) {
    //     const element = await allLinks[index].textContent();
    //     console.log(element?.trim());
        
    // }
    // [data-turbo="false"]
    let allLinks = page.locator('[data-turbo="false"]');
    const nos = await allLinks.count();

    for (let index = 0; index < await nos; index++) {
        const element = await allLinks.nth(index).textContent();
        console.log(`no of whatever is: ${element?.trim()}`);
        
    }
});