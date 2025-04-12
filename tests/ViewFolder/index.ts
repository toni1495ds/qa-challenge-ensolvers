import { Page, expect } from "@playwright/test";
import { createFolder } from "../CreateFolder";

export async function viewFolder(page: Page) {
  // STEP: Go to "Manage Folders"
  const manageFoldersButton = page
    .getByRole("button")
    .filter({ hasText: "Manage Folders" })
    .first();
  await manageFoldersButton.waitFor({ state: "visible" });
  await manageFoldersButton.click();

  // STEP: Try to locate a View button for folders
  let viewButton = page
    .locator('[data-cy="entityDetailsButton"][href^="/folder/"]')
    .first();

  if (!(await viewButton.isVisible())) {
    // STEP: No folder found → create one
    await createFolder(page);
    viewButton = page
      .locator('[data-cy="entityDetailsButton"][href^="/folder/"]')
      .first();
  }

  // STEP: Click the "View" button
  await viewButton.waitFor({ state: "visible" });
  await viewButton.click();

  // STEP: Assert details are visible
  const idField = page.getByText("ID").first();
  const nameField = page.getByText("Name").first();
  const userField = page.getByText("User").first();

  await expect(idField).toBeVisible();
  await expect(nameField).toBeVisible();
  await expect(userField).toBeVisible();
}
