import { test, expect } from '@playwright/test';

test('Dynamic ID Handling', async ({ page }) => {
  await page.goto('/flaky-selectors');
  await page.getByRole('button', { name: 'Regenerate All IDs' }).click();
  // Locating by text/role is resilient to dynamic ID changes
  await page.getByRole('listitem').filter({ hasText: 'Beta' }).click();
  await expect(page.locator('.selected-item')).toHaveText('Beta');
});
