import { test, expect } from '@playwright/test';

test('Verify login with valid credentials', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').click();
  await page.locator('div').filter({ hasText: 'Accepted usernames are:' }).nth(4).click();
  await page.locator('body').press('ControlOrMeta+c');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="login-password"]').click();
  await page.locator('[data-test="login-password"]').click();
  await page.locator('[data-test="login-password"]').click();
  await page.locator('body').press('ControlOrMeta+c');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  });

  test('Verify login with invalid credentials', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').click();
  await page.locator('div').filter({ hasText: 'Accepted usernames are:' }).nth(4).click();
  await page.locator('body').press('ControlOrMeta+c');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="login-password"]').click();
  await page.locator('[data-test="login-password"]').click();
  await page.locator('[data-test="login-password"]').click();
  await page.locator('body').press('ControlOrMeta+c');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  });