import { test, expect } from "@playwright/test";

test('mock API response and verify UI rendering', async ({ page }) => {
  // Intercept the API call and mock the response
  await page.route('**/api/v1/fruits', async (route) => {
    const response = await route.fetch();
    const json = await response.json();
    json.push({ name: 'playwright typescript by testers talk', id: 12 });
        json.push({ name: 'playwright javascript by testers talk', id: 13 });
        json.push({ name: 'cypress by testers talk', id: 14 });
        json.push({ name: 'api testing by testers talk', id: 15 });
    await route.fulfill({ response, json });
  });

  // Navigate to the page under test
  await page.goto('https://demo.playwright.dev/api-mocking/');

  // Verify that the mocked items are visible
  await expect(page.getByText('playwright typescript by testers talk')).toBeVisible();
  await expect(page.getByText('playwright javascript by testers talk')).toBeVisible();
  await expect(page.getByText('cypress by testers talk')).toBeVisible();
  await expect(page.getByText('api testing by testers talk')).toBeVisible();
});
