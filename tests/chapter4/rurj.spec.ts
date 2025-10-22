import {test,expect} from "@playwright/test";

test('test1', async({page}) =>{
    await page.goto('https://www.google.com/');
    await page.getByRole('combobox', { exact: true }).fill('playwright by testers talk');
    await page.getByRole('combobox', { exact: true }).press('Enter');
 
    // Click on playlist

    // Validate web page title 
});

test('test2', async({page}) =>{
  expect(page).toBe(false);
})
test('test3', async({page}) =>{
  expect(page).toBe(false);
   
})