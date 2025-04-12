import { Page, expect } from "@playwright/test";

export async function createTodo(page: Page) {
  // STEP: Ensure we're on the "Manage To-Do Items" page
  const manageToDoUrl = /.*\/to-do-item.*/;
  if (!manageToDoUrl.test(page.url())) {
    const manageButton = page
      .getByRole("button")
      .filter({ hasText: "Manage To-Do Items" })
      .first();
    await manageButton.waitFor({ state: "visible" });
    await manageButton.click();
  }

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
  await titleInput.fill("Buy milk");

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
}
