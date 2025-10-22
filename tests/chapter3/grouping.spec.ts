import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';


test.setTimeout(180000);

test.describe('groupbingwa', ()=>{
    test('search and go to Playwright by Testers Talk', async ({ page }) => {
        // Build absolute path to a "screenshots" folder next to this test file
        const dir = path.resolve(__dirname, '../screenshot');
        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
      
        // Go to the YouTube playlist
        await page.goto('https://www.youtube.com/playlist?list=PLUeDIlio4THEgPRVJRqZRS8uw8hhVNQCM', {
          waitUntil: 'domcontentloaded',
        });
      
})

  // Wait for the header to appear
  test.describe('group zalendo', ()=>{
    test( 'using things to get', async({page}) => {

        await page.goto('https://www.google.com/');
        await page.getByTitle('Search by image').click();
    
        // await page.getByPlaceholder('ytSearchboxComponentInputBox').click();
        // await page.locator('input[@name="search_query"]').fill('hello');
        // await page.locator('input[name="search_query"]').press('Enter');
    
        
    });
  })
});
