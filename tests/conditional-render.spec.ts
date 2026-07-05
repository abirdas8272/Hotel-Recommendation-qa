import { test, expect } from '@playwright/test';

test('Conditional Login Flow', async ({ page }) => {
  await page.goto('/flaky-selectors');
  
  // Admin Flow
  await page.getByRole('button', { name: 'Admin User' }).click();
  await expect(page.locator('.admin-panel')).toBeVisible();
  await expect(page.locator('.standard-panel')).not.toBeVisible();
  
  await page.getByRole('button', { name: 'Logout' }).click();
  
  // Standard Flow
  await page.getByRole('button', { name: 'Standard User' }).click();
  await expect(page.locator('.standard-panel')).toBeVisible();
  await expect(page.locator('.admin-panel')).not.toBeVisible();
});
