import { test, expect } from '@playwright/test';

test('Load and Verify List Items', async ({ page }) => {
  await page.goto('/timing-challenges');
  for (let i = 0; i < 3; i++) {
    await page.getByRole('button', { name: 'Load More Items' }).click();
  }
  
  const items = page.locator('.list-item');
  await expect(items).toHaveCount(15);
  await expect(page.locator('.list-item >> text=active')).toBeVisible();
  await expect(page.locator('.list-item >> text=pending')).toBeVisible();
});
