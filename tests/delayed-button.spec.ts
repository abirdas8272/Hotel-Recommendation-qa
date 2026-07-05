import { test, expect } from '@playwright/test';

test('Delayed Button Flow', async ({ page }) => {
  await page.goto('/timing-challenges');
  await page.getByRole('button', { name: 'Start Process' }).click();
  
  const confirmBtn = page.getByRole('button', { name: 'Confirm Action' });
  // Automatic waiting until enabled
  await expect(confirmBtn).toBeEnabled({ timeout: 10000 });
  await confirmBtn.click();
  
  await expect(page.locator('.success-message')).toBeVisible();
});
