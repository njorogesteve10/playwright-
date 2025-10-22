import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

test.setTimeout(180000);
test.beforeAll( async()=> {
    console.log('ive been here for a good time not s long time you know i')
})

test.afterAll(async() => {
    console.log('work work work work work worked');
});


test('search and go to Playwright by Testers Talk', async ({ page }) => {
  // Build absolute path to a "screenshots" folder next to this test file
  // const dir = path.resolve(__dirname, '../screenshot');
  // if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  // console.log('test has started forreaallrllrl')

  // Go to the YouTube playlist
  await page.goto('https://www.youtube.com/playlist?list=PLUeDIlio4THEgPRVJRqZRS8uw8hhVNQCM', {
    waitUntil: 'domcontentloaded',
  });

  // Wait for the header to appear
  // const header = page.locator('#masthead-container');
  
});
