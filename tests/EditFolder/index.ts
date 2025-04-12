import { Page, expect } from "@playwright/test";
import { createFolder } from "../CreateFolder";

export async function editFolder(page: Page) {
  // STEP: Go to "Manage Folders"
  const manageButton = page
    .getByRole("button", { name: "Manage Folders" })
    .first();
  await manageButton.waitFor({ state: "visible" });
  await manageButton.click();

  // STEP: Try to locate a folder row
  let editButton = page
    .locator('[data-cy="entityEditButton"][href^="/folder/"]')
    .first();
  if (!(await editButton.isVisible())) {
    await createFolder(page);
    editButton = page
      .locator('[data-cy="entityEditButton"][href^="/folder/"]')
      .first();
  }

  // STEP: Click "Edit" on a folder
  await editButton.waitFor({ state: "visible" });
  await editButton.click();

  // STEP: Update folder name
  const nameInput = page.locator('[data-cy="name"]').first();
  await nameInput.waitFor({ state: "visible" });
  const updatedName = `Projects - ${Math.floor(Math.random() * 1000)}`;
  await nameInput.fill(updatedName);

  // STEP: Save changes
  const saveButton = page.getByRole("button", { name: "Save" }).first();
  await saveButton.waitFor({ state: "visible" });
  await saveButton.click();

  // STEP: Confirm folder is updated and visible
  const updatedRow = page
    .getByRole("row", { name: new RegExp(updatedName, "i") })
    .first();
  await expect(updatedRow).toBeVisible();
}
