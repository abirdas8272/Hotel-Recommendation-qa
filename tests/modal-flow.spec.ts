import { test, expect } from '@playwright/test';

test('Modal Confirmation Flow', async ({ page }) => {
  await page.goto('/responsive');
  await page.getByRole('button', { name: 'Open Modal' }).click();
  
  // Scope interaction to the active modal layer
  await page.locator('.modal').last().getByRole('button', { name: 'Show Details' }).click();
  await page.locator('.nested-modal').getByRole('button', { name: 'Confirm' }).click();
  
  await expect(page.locator('#result')).toHaveText(/confirmed/);
});
