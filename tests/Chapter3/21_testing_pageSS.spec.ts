import { test, expect } from '@playwright/test';

test('visual comparison in playwright', async ({ page }) => {
  await page.goto('https://github.com/login');
  await expect(page).toHaveScreenshot('github-login.png');
});