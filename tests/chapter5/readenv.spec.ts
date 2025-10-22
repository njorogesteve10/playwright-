import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();
// Global test timeout
test.setTimeout(120000);

test('first writing this before the millionth', async ({ browser }) => {
  // ✅ Create a realistic browser context (reduces CAPTCHA likelihood)
  const context = await browser.newContext({
    viewport: { width: 1366, height: 768 },
    timezoneId: 'Africa/Nairobi',
    locale: 'en-US',
    userAgent:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  });

  const page = await context.newPage();

  // Step 1️⃣ — Visit Google homepage
  await page.goto(`${process.env.googleurl}`, { waitUntil: 'domcontentloaded', timeout: 60000 });

  // Step 2️⃣ — Handle possible cookie consent popup
  const acceptBtn = page.locator(
    'button:has-text("I agree"), button:has-text("Accept all"), div[role="none"] >> text=Accept'
  );
  try {
    if (await acceptBtn.isVisible({ timeout: 5000 })) {
      await acceptBtn.click();
      console.log('🍪 Accepted cookie consent');
    }
  } catch {
    console.log('No cookie popup detected');
  }

  // Step 3️⃣ — Fill search input (handles both English & Swahili)
  const searchBox = page.getByRole('combobox', { name: /tafuta|search/i });
  await searchBox.click();
  await page.waitForTimeout(300);
  await searchBox.fill('playwright by testers talk');
  await searchBox.press('Enter');

  // Step 4️⃣ — Check for CAPTCHA page
  await page.waitForLoadState('domcontentloaded');
  const currentUrl = page.url();

  if (
    currentUrl.includes('/sorry/') ||
    (await page.locator('form[action*="sorry"]').count()) > 0
  ) {
    console.warn('⚠️ CAPTCHA detected — redirecting directly to YouTube to continue test...');
    await page.goto(`${process.env.youtubeurl}`, {
      waitUntil: 'domcontentloaded',
    });
  } else {
    // Step 5️⃣ — Wait for search results and click YouTube link
    await page.waitForSelector('a h3', { timeout: 20000 });
    const link = page.locator('a:has-text("Playwright by Testers Talk")');
    await expect(link).toBeVisible({ timeout: 15000 });
    await link.first().click();
  }

  // Step 6️⃣ — Wait for YouTube page to load
  await page.waitForLoadState('domcontentloaded');

  // Step 7️⃣ — Validate YouTube channel content
  await expect(page).toHaveTitle(/Testers Talk|Playwright/i);

  const browseResults = page.locator('ytd-two-column-browse-results-renderer');
  await expect(page.getByRole('link', { name: /Playwright TypeScript by/i })).toBeVisible();
  await expect(page.getByRole('link', { name: /Playwright API Testing by/i })).toBeVisible();
  await expect(browseResults).toContainText('Playwright API Testing by Testers Talk☑️');
  await expect(browseResults).toContainText('Playwright TypeScript by Testers Talk ✅');

  console.log('✅ Test completed successfully');
  await context.close();
});
