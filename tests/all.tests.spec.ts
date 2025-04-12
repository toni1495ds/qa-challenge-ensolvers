import { test } from "@playwright/test";
import { login, logout } from "./login.spec";

// To-Do actions
import { createTodo } from "./CreateToDo";
import { viewTodo } from "./ViewToDo";
import { editTodo } from "./EditToDo";
import { deleteTodo } from "./DeleteToDo";

// Folder actions
import { createFolder } from "./CreateFolder";
import { viewFolder } from "./ViewFolder";
import { editFolder } from "./EditFolder";
import { deleteFolder } from "./DeleteFolder";

// Account Management
import { updateSettings } from "./UpdateSettings";

test.beforeEach(async ({ page }) => {
  await login(page);
});

test.describe("To-Do Flow", () => {
  test("Create a new To-Do", async ({ page }) => {
    await createTodo(page);
  });

  test("View a To-Do item", async ({ page }) => {
    await viewTodo(page);
  });

  test("Edit a To-Do item", async ({ page }) => {
    await editTodo(page);
  });

  test("Delete a To-Do item", async ({ page }) => {
    await deleteTodo(page);
  });
});

test.describe("Folder Flow", () => {
  test("Create a Folder", async ({ page }) => {
    await createFolder(page);
  });

  test("View a Folder", async ({ page }) => {
    await viewFolder(page);
  });

  test("Edit a Folder", async ({ page }) => {
    await editFolder(page);
  });

  test("Delete a Folder", async ({ page }) => {
    await deleteFolder(page);
  });
});

test.describe("Account Management", () => {
  test("Update user settings", async ({ page }) => {
    await updateSettings(page);
  });
});

test.describe("Session Flow", () => {
  test("Log out successfully", async ({ page }) => {
    await logout(page);
  });
});
