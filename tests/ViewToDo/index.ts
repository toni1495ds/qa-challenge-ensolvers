import { Page, expect } from "@playwright/test";
import { createTodo } from "../CreateToDo";

export async function viewTodo(page: Page) {
  // STEP: Go to "Manage To-Do Items"
  const manageButton = page
    .getByRole("button")
    .filter({ hasText: "Manage To-Do Items" })
    .first();
  await manageButton.waitFor({ state: "visible" });
  await manageButton.click();

  // STEP: Try to locate a View button
  let viewButton = page
    .locator('[data-cy="entityDetailsButton"][href^="/to-do-item/"]')
    .first();

  if (!(await viewButton.isVisible())) {
    // STEP: No To-Do item found → create one using shared helper
    await createTodo(page);
    viewButton = page
      .locator('[data-cy="entityDetailsButton"][href^="/to-do-item/"]')
      .first();
  }

  // STEP: Click the "View" button
  await viewButton.click();

  // STEP: Assert details are visible
  const idField = page.getByText("ID").first();
  const titleField = page.getByText("Title").first();
  const descriptionField = page.getByText("Description").first();

  await expect(idField).toBeVisible();
  await expect(titleField).toBeVisible();
  await expect(descriptionField).toBeVisible();

  // STEP: Check "Folder" label, but avoid picking the sidebar menu
  const folderLabels = page.getByText("Folder");
  const folderField =
    (await folderLabels.count()) > 1
      ? folderLabels.nth(1)
      : folderLabels.last();

  await expect(folderField).toBeVisible();
}
