import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('navigation', { name: 'Sidepanel' }).getByRole('button').click();
  await page.getByRole('link').filter({ hasText: 'My Info' }).click();
  await page.getByRole('link', { name: 'Contact Details' }).click();
  await page.getByRole('textbox').nth(1).click();
  await page.getByRole('textbox').nth(1).fill('test');
  await page.getByRole('heading', { name: 'Contact Details' }).click();
  await expect(page.getByRole('textbox').nth(1)).toBeVisible();
});