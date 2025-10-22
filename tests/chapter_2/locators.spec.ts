import { test, expect } from '@playwright/test';

// Global test timeout
test.setTimeout(120000);

test('first writing this before the millionth', async ({page }) => {

//  await page.getByRole('link', { name: 'Sign in' }).click();

// await page.getByLabel('Homepage', { exact: true }).first().click();

// await page.getByAltText("View BakkappaN's full-sized avatar").click();

// await page.getByTestId('projects').first().click();

// await page.getByText('Sign up').click();

await page.goto('https://www.google.com/');


await page.getByTitle('Search').fill('testers talk');

// await page.locator("input[name='search_query']").fill('money talks bullshit walks');

});