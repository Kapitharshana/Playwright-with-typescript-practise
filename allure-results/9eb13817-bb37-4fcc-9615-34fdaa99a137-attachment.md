# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: chapter4\28_check_diffTestReport.spec.ts >> regression testing >> test2
- Location: tests\chapter4\28_check_diffTestReport.spec.ts:18:5

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: page.goto: Test timeout of 60000ms exceeded.
Call log:
  - navigating to "https://www.youtube.com/", waiting until "load"

```

# Page snapshot

```yaml
- img [ref=e4]
```

# Test source

```ts
  1  | import{test,expect} from '@playwright/test';
  2  | 
  3  | test.describe("smoke testing" ,  () =>{
  4  | 
  5  | test('test1', async ({ page }) => {
  6  |    test.setTimeout(1200000);
  7  |   await page.goto('https://www.youtube.com/');
  8  |   await page.getByRole('combobox', { name: 'Search' }).click();
  9  |   await page.getByRole('combobox', { name: 'Search' }).fill('learn playwright with typescript');
  10 |   await page.getByRole('combobox', { name: 'Search' }).press('Enter');
  11 |   await expect(page.getByRole('link', { name: 'Learn Playwright with' })).toBeVisible();
  12 | });
  13 | 
  14 | });
  15 | 
  16 | test.describe("regression testing" , () =>{
  17 | 
  18 | test('test2', async ({ page }) => {
  19 |   test.setTimeout(60000);
> 20 |   await page.goto('https://www.youtube.com/');
     |              ^ Error: page.goto: Test timeout of 60000ms exceeded.
  21 |   await page.getByRole('combobox', { name: 'Search' }).click();
  22 |   await page.getByRole('combobox', { name: 'Search' }).fill('learn playwright with typescript');
  23 |   await page.getByRole('combobox', { name: 'Search' }).press('Enter');
  24 |   await expect(page.getByRole('link', { name: 'Learn Playwright with' })).toBeVisible();
  25 |   
  26 | });
  27 | 
  28 | test('test3', async ({ page }) => {
  29 |   test.setTimeout(60000);
  30 |   await page.goto('https://www.youtube.com/');
  31 |   await page.getByRole('combobox', { name: 'Search' }).click();
  32 |   await page.getByRole('combobox', { name: 'Search' }).fill('learn playwright with typescript');
  33 |   await page.getByRole('combobox', { name: 'Search' }).press('Enter');
  34 |   await expect(page.getByRole('link', { name: 'Learnhello Playwright with' })).toBeVisible();
  35 |   
  36 | });
  37 | 
  38 | 
  39 | });
  40 | 
  41 | 
  42 | 
  43 | /*go to playwright config.tes and write 
  44 | ['json', {outputFile: 'test-resuts.json'}] in reporter array to generate json report and then we can compare the json report with the expected report to check the difference between them.
  45 | ['list'] this is like html but the test eport we can see in the console output.
  46 | */
```