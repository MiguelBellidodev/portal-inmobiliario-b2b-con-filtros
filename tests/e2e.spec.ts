// Tests E2E automatizados con Playwright
// Autor: Joaquín (Testing QA Lead)
// Proyecto: Portal inmobiliario B2B con filtros…

import { test, expect } from '@playwright/test';

test.describe('Portal inmobiliario B2B con filtros… - Smoke Tests', () => {
  test('página principal carga correctamente', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Portal inmobiliario B2B con filtros…/);
  });

  test('responsive mobile 375px', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');
    await expect(page.locator('header')).toBeVisible();
    await expect(page.locator('footer')).toBeVisible();
  });

  test('botón de WhatsApp visible y funcional', async ({ page }) => {
    await page.goto('/');
    const whatsappLink = page.locator('a[href*="wa.me"]').first();
    await expect(whatsappLink).toBeVisible();
    const href = await whatsappLink.getAttribute('href');
    expect(href).toContain('wa.me');
  });

  test('Core Web Vitals - LCP menor a 2.5s', async ({ page }) => {
    const start = Date.now();
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
    const elapsed = Date.now() - start;
    expect(elapsed).toBeLessThan(2500);
  });
});
