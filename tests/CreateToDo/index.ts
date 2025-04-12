import { Page, expect } from "@playwright/test";

export async function createTodo(page: Page) {
  const todoTitle = "Buy milk";

  // STEP: Go to "Manage To-Do Items"
  const manageButton = page
    .getByRole("button")
    .filter({ hasText: "Manage To-Do Items" })
    .first();
  await manageButton.waitFor({ state: "visible" });
  await manageButton.click();

  // STEP: Click "Create new To Do Item"
  const createLink = page
    .getByRole("link")
    .filter({ hasText: "Create new To Do Item" })
    .first();
  await createLink.waitFor({ state: "visible" });
  await createLink.click();

  // STEP: Fill in title
  const titleInput = page.locator('[data-cy="title"]').first();
  await titleInput.waitFor({ state: "visible" });
  await titleInput.fill(todoTitle);

  // STEP: Fill in description
  const descriptionInput = page.locator('[data-cy="description"]').first();
  await descriptionInput.waitFor({ state: "visible" });
  await descriptionInput.fill("From the supermarket");

  // STEP: Click Save
  const saveButton = page
    .getByRole("button")
    .filter({ hasText: "Save" })
    .first();
  await saveButton.waitFor({ state: "visible" });
  await saveButton.click();

  // STEP: Assert toaster is visible
  const toaster = page.locator('[role="alert"]').first();
  await expect(toaster).toBeVisible();

  // STEP: Verify new item is listed (loop with pagination if needed)
  let found = false;
  let attempts = 0;

  while (!found && attempts < 5) {
    const row = page
      .getByRole("row", { name: new RegExp(todoTitle, "i") })
      .first();

    try {
      await expect(row).toBeVisible({ timeout: 1500 });
      found = true;
    } catch {
      const nextBtn = page.getByRole("button", { name: "Next" }).first();
      if (await nextBtn.isVisible()) {
        await nextBtn.click();
        await page.waitForTimeout(500); // wait for page change
        attempts++;
      } else {
        break;
      }
    }
  }

  // STEP: Final assertion
  expect(found).toBeTruthy();
}
