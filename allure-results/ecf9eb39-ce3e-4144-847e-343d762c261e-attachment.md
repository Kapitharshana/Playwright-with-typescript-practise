# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: chapter4\28_check_diffTestReport.spec.ts >> regression testing >> test3
- Location: tests\chapter4\28_check_diffTestReport.spec.ts:28:5

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
- generic [ref=e2]:
  - banner [ref=e4]:
    - generic [ref=e6]:
      - generic [ref=e7]:
        - button "Guide" [ref=e9] [cursor=pointer]:
          - generic [ref=e12]:
            - img
        - generic [ref=e13]:
          - link "YouTube Home" [ref=e14] [cursor=pointer]:
            - /url: /
            - generic [ref=e19]:
              - img
          - generic [ref=e20]: LK
        - button "Skip navigation" [ref=e24] [cursor=pointer]:
          - generic [ref=e25]: Skip navigation
      - generic [ref=e29]:
        - search [ref=e30]:
          - generic [ref=e31]:
            - combobox "Search" [expanded] [ref=e34]
            - button "Search" [ref=e35] [cursor=pointer]:
              - generic [ref=e38]:
                - img
        - generic [ref=e40]:
          - button "Search with your voice" [ref=e42] [cursor=pointer]:
            - generic [ref=e46]:
              - img
          - tooltip "tooltip"
      - generic [ref=e51]:
        - button "Settings" [ref=e56] [cursor=pointer]:
          - generic [ref=e59]:
            - img
        - link "Sign in" [ref=e62] [cursor=pointer]:
          - /url: https://accounts.google.com/ServiceLogin?service=youtube&uilel=3&passive=true&continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26app%3Ddesktop%26hl%3Den%26next%3Dhttps%253A%252F%252Fwww.youtube.com%252F&hl=en&ec=65620
          - generic [ref=e66]:
            - img
          - generic [ref=e67]: Sign in
  - navigation [ref=e71]:
    - generic [ref=e72]:
      - link "Home" [ref=e74] [cursor=pointer]:
        - /url: /
        - generic [ref=e77]:
          - img
        - generic [ref=e78]: Home
      - link "Shorts" [ref=e80] [cursor=pointer]:
        - /url: /shorts/
        - generic [ref=e83]:
          - img
        - generic [ref=e84]: Shorts
      - link "Subscriptions" [ref=e86] [cursor=pointer]:
        - /url: /feed/subscriptions
        - generic [ref=e89]:
          - img
        - generic [ref=e90]: Subscriptions
      - link "You" [ref=e92] [cursor=pointer]:
        - /url: /feed/you
        - generic [ref=e95]:
          - img
        - generic [ref=e96]: You
  - generic [ref=e97]:
    - main [ref=e98]:
      - generic [ref=e108]:
        - heading "Try searching to get started" [level=2] [ref=e109]
        - generic [ref=e110]: Start watching videos to help us build a feed of videos you'll love.
    - text: •
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
  19 |   test.setTimeout(1200000);
  20 |   await page.goto('https://www.youtube.com/');
  21 |   await page.getByRole('combobox', { name: 'Search' }).click();
  22 |   await page.getByRole('combobox', { name: 'Search' }).fill('learn playwright with typescript');
  23 |   await page.getByRole('combobox', { name: 'Search' }).press('Enter');
  24 |   await expect(page.getByRole('link', { name: 'Learn Playwright with' })).toBeVisible();
  25 |   
  26 | });
  27 | 
  28 | test('test3', async ({ page }) => {
  29 |   test.setTimeout(60000);
> 30 |   await page.goto('https://www.youtube.com/');
     |              ^ Error: page.goto: Test timeout of 60000ms exceeded.
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