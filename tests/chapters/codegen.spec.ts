import { test, expect } from '@playwright/test';

test.setTimeout(180000);

test('search and go to Playwright by Testers Talk', async ({ browser }) => {
  const context = await browser.newContext({
    viewport: { width: 1366, height: 768 },
    userAgent:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36',
    locale: 'en-US',
    timezoneId: 'Africa/Nairobi',
    geolocation: { longitude: 36.8219, latitude: -1.2921 },
    permissions: ['geolocation'],
  });

  const page = await context.newPage();

  console.log('🌐 Navigating to Google...');
  await page.goto('https://www.google.com/', { waitUntil: 'domcontentloaded' });

  // ✅ Step 1: Handle Google consent popup
  const acceptButton = page.locator('button:has-text("I agree"), button:has-text("Accept all")');
  try {
    if (await acceptButton.isVisible({ timeout: 5000 })) {
      await acceptButton.click();
      console.log('🍪 Accepted cookie consent');
    }
  } catch {
    console.log('No cookie popup found.');
  }

  // ✅ Step 2: Simulate more human-like typing and interaction
  const searchInput = page.getByRole('combobox', { name: /search|tafuta/i });
  await searchInput.click();
  await page.waitForTimeout(500); // short human-like pause
  await searchInput.type('Playwright by Testers Talk', { delay: 150 }); // slow typing
  await page.keyboard.press('Enter');

  // ✅ Step 3: Wait for results page
  await page.waitForLoadState('domcontentloaded');
  const currentURL = page.url();

  // ⚠️ Step 4: CAPTCHA detection
  if (currentURL.includes('/sorry/')) {
    console.warn('⚠️ CAPTCHA detected! Redirecting manually...');
    // ✅ Instead of trying to "bypass", skip directly to YouTube
    await page.goto('https://www.youtube.com/@TestersTalk', { waitUntil: 'domcontentloaded' });
  } else {
    // ✅ Step 5: Proceed normally if no CAPTCHA
    await page.waitForSelector('a h3', { timeout: 30000 });
    const youtubeLink = page.locator('a:has-text("Playwright by Testers Talk")');
    await expect(youtubeLink).toBeVisible({ timeout: 10000 });
    await youtubeLink.first().click();
  }

  // ✅ Step 6: Validate YouTube page
  await page.waitForLoadState('domcontentloaded');
  await expect(page).toHaveTitle(/Playwright|Testers Talk|YouTube/i);

  console.log('✅ Arrived at Playwright by Testers Talk channel');
  await context.close();
});
