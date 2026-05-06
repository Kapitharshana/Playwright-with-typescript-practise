import { test, expect } from '@playwright/test';

test('class 01', async ({page}) => {
    
await page.goto('https://www.youtube.com/playlist?list=PLUeDIlio4THEgPRVJRqZRS8uw8hhVNQCM');

await expect(page.getByRole('link', { name: '#1 Playwright Tutorial Full' })).toBeVisible();
await expect(page.getByRole('link', { name: '#2 Playwright API Testing' })).toBeVisible();

await expect(page.getByLabel('#1 Playwright Tutorial Full').locator('#video-title')).toContainText('#1 Playwright Tutorial Full Course 2026 | Playwright Testing Tutorial');
await expect(page.getByLabel('#2 Playwright API Testing').locator('#video-title')).toContainText('#2 Playwright API Testing Tutorial Crash Course 2024');

})



