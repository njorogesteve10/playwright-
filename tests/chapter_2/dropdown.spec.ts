// import {test, expect} from "@playwright/test";
// test.setTimeout(180000);
// test('using dropdown list', async({page})=>{
//     await page.goto('https://web.facebook.com/?_rdc=1&_rdr#');

//     await page.getByRole("button", {name:"Create new account", exact: true}).click();

//     await page.getByLabel('Month').selectOption('Dec');

//     await page.getByLabel('Month').selectOption('11');

//     await expect(page.locator('#month > option')).toHaveText([
//         'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
//         'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
//       ]);
      
// })