import { expect, Page } from '@playwright/test';

export async function login(page: Page) {
  // STEP: Go to login page
  await page.goto('https://qa-challenge.ensolvers.com/login');

  // STEP: Fill username input
  const usernameInput = page.locator('[data-cy="username"]').first();
  await usernameInput.waitFor({ state: 'visible' });
  await usernameInput.fill('user');

  // STEP: Fill password input
  const passwordInput = page.locator('[data-cy="password"]').first();
  await passwordInput.waitFor({ state: 'visible' });
  await passwordInput.fill('user');

  // STEP: Click Sign in button
  const loginButton = page.getByRole('button').filter({ hasText: 'Sign in' }).first();
  await loginButton.waitFor({ state: 'visible' });
  await loginButton.click();

  // STEP: Assert login success message is visible
  const messageLogged = page.getByRole('alert').filter({ hasText: 'You are logged in as "user".' }).first();
  await expect(messageLogged).toBeVisible();
}

export async function logout(page: Page) {
  // STEP: Open Account dropdown
  const accountDropdown = page.getByRole('link').filter({ hasText: 'Account' }).first();
  await accountDropdown.waitFor({ state: 'visible' });
  await accountDropdown.click();

  // STEP: Click Sign out
  const logoutButton = page.getByRole('menuitem').filter({ hasText: 'Sign out' }).first();
  await logoutButton.waitFor({ state: 'visible' });
  await logoutButton.click();

  // STEP: Assert logout confirmation is visible
  const logoutMessage = page.getByRole('heading', { name: 'Logged out successfully!' }).first();
  await expect(logoutMessage).toBeVisible();
}