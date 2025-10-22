import { test, expect } from "@playwright/test";

test.setTimeout(180000);

test('droppable', async ({ page }) => {
  await page.goto('https://jqueryui.com/droppable/');

  const frame = page.frameLocator('.demo-frame');
  const dragged = frame.locator('#draggable');
  const dropped = frame.locator('#droppable');

  await dragged.dragTo(dropped);
});
