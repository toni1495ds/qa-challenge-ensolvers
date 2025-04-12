import { Page, expect } from "@playwright/test";
import { createFolder } from "../CreateFolder";

export async function deleteFolder(page: Page) {
  // STEP: Ensure at least one folder exists
  const folderCount = await page
    .locator('[data-cy="entityDeleteButton"][href*="/folder/"]')
    .count();
  if (folderCount === 0) {
    await createFolder(page);
  }

  // STEP: Click Delete icon on first folder
  const deleteIcon = page
    .locator('[data-cy="entityDeleteButton"][href*="/folder/"]')
    .first();
  await deleteIcon.waitFor({ state: "visible" });
  await deleteIcon.click();

  // STEP: Confirm deletion in modal
  const confirmDelete = page.getByRole("button", { name: "Delete" }).first();
  await confirmDelete.waitFor({ state: "visible" });
  await confirmDelete.click();

  // STEP: Assert deletion toaster is visible
  const toast = page
    .getByText(/A folder is deleted with identifier \d+/)
    .first();
  await expect(toast).toBeVisible();
}
