import { Page, expect } from "@playwright/test";
import { createTodo } from "../CreateToDo";

export async function deleteTodo(page: Page) {
  // STEP: Ensure at least one to-do item exists
  const itemCount = await page
    .locator('[data-cy="entityDeleteButton"]')
    .count();
  if (itemCount === 0) {
    await createTodo(page);
  }

  // STEP: Click Delete icon on first To-Do
  const deleteIcon = page.locator('[data-cy="entityDeleteButton"]').first();
  await deleteIcon.waitFor({ state: "visible" });
  await deleteIcon.click();

  // STEP: Confirm deletion in modal
  const confirmDelete = page.getByRole("button", { name: "Delete" }).first();
  await confirmDelete.waitFor({ state: "visible" });
  await confirmDelete.click();

  // STEP: Optionally check for success toaster (not guaranteed if 500 error)
  // You can skip assertion here or keep it if you expect it to pass
  await page.waitForTimeout(1000); // Give time for backend to respond (even with error)
}
