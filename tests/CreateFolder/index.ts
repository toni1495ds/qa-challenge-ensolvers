import { Page, expect } from "@playwright/test";

export async function createFolder(page: Page) {
  const folderName = "Projects";

  // STEP: Ensure we're on the "Manage Folders" page
  const manageFolderUrl = /.*\/folder.*/;
  if (!manageFolderUrl.test(page.url())) {
    const manageFoldersButton = page
      .getByRole("button")
      .filter({ hasText: "Manage Folders" })
      .first();
    await manageFoldersButton.waitFor({ state: "visible" });
    await manageFoldersButton.click();
  }

  // STEP: Click "Create new Folder"
  const createFolderLink = page
    .getByRole("link")
    .filter({ hasText: "Create new Folder" })
    .first();
  await createFolderLink.waitFor({ state: "visible" });
  await createFolderLink.click();

  // STEP: Fill in folder name
  const nameInput = page.locator('[data-cy="name"]').first();
  await nameInput.waitFor({ state: "visible" });
  await nameInput.fill(folderName);

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

  // STEP: Final assertion - confirm new folder is in the list
  const row = page
    .getByRole("row", { name: new RegExp(folderName, "i") })
    .first();
  await expect(row).toBeVisible();
}
