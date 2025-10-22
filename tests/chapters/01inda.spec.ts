// File: tests/github-login.spec.ts
import { test, expect } from '@playwright/test';

test('GitHub login flow', async ({ page }) => {
  // Increase total test timeout
  test.setTimeout(60000);

  // Set navigation + action timeouts
  page.setDefaultNavigationTimeout(60000);
  page.setDefaultTimeout(20000);

  console.time('Total Test Time'); // start timer for full test

  await test.step('Go to GitHub', async () => {
    console.time('Goto GitHub');
    await page.goto('https://github.com/', { waitUntil: 'domcontentloaded' });
    console.timeEnd('Goto GitHub');
    await page.getByRole('link', { name: 'Sign in' }).click();
  });

  await test.step('Enter username and password', async () => {
    console.time('Fill credentials');
    await page.getByLabel('Username or email address').fill('testerstalk');
    await page.getByLabel('Password').fill('test123');
    console.timeEnd('Fill credentials');
  });

  await test.step('Click on Sign in', async () => {
    console.time('Click Sign in');
    await page.getByRole('button', { name: 'Sign in', exact: true }).click();
    console.timeEnd('Click Sign in');
  });

  await test.step('Validate login message', async () => {
    console.time('Validation');
    await expect(page.getByRole('alert')).toContainText('Incorrect username or password.');
    console.timeEnd('Validation');
  });

  console.timeEnd('Total Test Time'); // end timer for full test
});
