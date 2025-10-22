import { test, expect } from "@playwright/test";

test.setTimeout(180000);

test('droppable', async ({ page }) => {
  await page.goto('https://jqueryui.com/droppable/');

  const frame = page.frameLocator('.demo-frame');
  const dragged = frame.locator('#draggable');
  const dropped = frame.locator('#droppable');

  await dragged.dragTo(dropped);
});

test('date picking', async({page}) =>{
    await page.goto('https://jqueryui.com/datepicker/');
    const iframe= await page.frameLocator("[class = 'demo-frame']")
    // await iframe.locator('[id = "datepicker"]').fill('12/12/2023');

    await iframe.locator('[id = "datepicker"]').click();
    await iframe.locator('a.ui-state-active, a.ui-state-highlight').click();

    await iframe.locator('[id = "datepicker"]').click();
    await iframe.locator('[title="Prev"]').click();
    await iframe.locator('text="24"').click();

    await  expect(page.getByPlaceholder('Search', {exact: true}).first()).toBeVisible();
});

test('date', async({page}) =>{
    await page.goto('https://jqueryui.com/datepicker/');
    const iframe= await page.frameLocator("[class = 'demo-frame']")
    // await iframe.locator('[id = "datepicker"]').fill('12/12/2023');

    await iframe.locator('[id = "datepicker"]').click();
    await iframe.locator('a.ui-state-active, a.ui-state-highlight').click();

    await iframe.locator('[id = "datepicker"]').click();
    await iframe.locator('[title="Prev"]').click();
    await iframe.locator('text="24"').click();

    await  expect(page.getByPlaceholder('Search', {exact: true}).first()).toBeVisible();
});
