import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

test.setTimeout(180000);

test('search and go to Playwright by Testers Talk', async ({ page }) => {
  // Build absolute path to a "screenshots" folder next to this test file
  const dir = path.resolve(__dirname, '../screenshot');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  // Go to the YouTube playlist
  await page.goto('https://www.youtube.com/playlist?list=PLUeDIlio4THEgPRVJRqZRS8uw8hhVNQCM', {
    waitUntil: 'domcontentloaded',
  });

  // Wait for the header to appear
  const header = page.locator('#masthead-container');
  await expect(header).toBeVisible({ timeout: 15000 });

  // Save screenshot
  const screenshotPath = path.join(dir, 'Full page.png');
  await header.screenshot({ path: screenshotPath });

  await page.screenshot({path:screenshotPath })

  await page.screenshot({path: screenshotPath, fullPage: true });

  console.log('✅ Screenshot saved at:', screenshotPath);
});
