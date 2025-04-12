import { Page, expect } from "@playwright/test";
import { createTodo } from "../CreateToDo";

export async function editTodo(page: Page) {
  // STEP: Go to "Manage To-Do Items"
  const manageButton = page
    .getByRole("button", { name: "Manage To-Do Items" })
    .first();
  await manageButton.waitFor({ state: "visible" });
  await manageButton.click();

  // STEP: Try to locate an Edit button
  let editButton = page
    .locator('[data-cy="entityEditButton"][href^="/to-do-item/"]')
    .first();

  if (!(await editButton.isVisible())) {
    // STEP: No To-Do item found → create one using shared helper
    await createTodo(page);
    editButton = page
      .locator('[data-cy="entityEditButton"][href^="/to-do-item/"]')
      .first();
  }

  // STEP: Click the "Edit" button
  await editButton.waitFor({ state: "visible" });
  await editButton.click();

  // STEP: Update the title and description
  const titleInput = page.locator('[data-cy="title"]').first();
  const descriptionInput = page.locator('[data-cy="description"]').first();
  await titleInput.waitFor({ state: "visible" });
  await descriptionInput.waitFor({ state: "visible" });

  const updatedTitle = "Buy milk and eggs";
  const updatedDesc = "From the supermarket and pharmacy";

  await titleInput.fill(updatedTitle);
  await descriptionInput.fill(updatedDesc);

  // STEP: Save changes
  const saveButton = page.getByRole("button", { name: "Save" }).first();
  await saveButton.waitFor({ state: "visible" });
  await saveButton.click();

  // STEP: Assert toaster is visible
  const toaster = page.locator('[role="alert"]').first();
  await expect(toaster).toBeVisible();

  // STEP: Final assertion - check the updated title is listed
  const updatedRow = page
    .getByRole("row", { name: new RegExp(updatedTitle, "i") })
    .first();
  await expect(updatedRow).toBeVisible();
}
