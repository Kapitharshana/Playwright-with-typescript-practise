import { test, expect } from '@playwright/test';

// Test 01 - Check page title
test('test 01', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example Domain/);
});

// Test 02 - Check heading visible
test.skip('test 02', async ({ page }) => {
  await page.goto('https://playwright.dev');
  //await expect(page.getByText('Playwright')).toBeVisible();
});

// Test 03 - Check input works
test.only('test 03', async ({ page }) => {
  await page.goto('https://www.google.com');
  await page.fill('textarea[name="q"]', 'Playwright');
  await expect(page.locator('textarea[name="q"]')).toHaveValue('Playwright');
  
});