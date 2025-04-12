import { Page, expect } from "@playwright/test";

export async function updateSettings(page: Page) {
  const randomFirstName = `Test-${Math.floor(Math.random() * 10000)}`;

  // STEP: Open Account dropdown
  const accountMenu = page.getByRole("link", { name: "Account" }).first();
  await accountMenu.waitFor({ state: "visible" });
  await accountMenu.click();

  // STEP: Click on Settings option
  const settingsItem = page.getByRole("menuitem", { name: "Settings" }).first();
  await settingsItem.waitFor({ state: "visible" });
  await settingsItem.click();

  // STEP: Fill new first name
  const firstNameInput = page.locator('[data-cy="firstname"]').first();
  await firstNameInput.waitFor({ state: "visible" });
  await firstNameInput.fill(randomFirstName);

  // STEP: Save changes
  const saveButton = page.getByRole("button", { name: "Save" }).first();
  await saveButton.waitFor({ state: "visible" });
  await saveButton.click();

  // STEP: Assert success message appears
  const successToast = page.getByText("Settings saved!").first();
  await expect(successToast).toBeVisible();
}
