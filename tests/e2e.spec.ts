// Playwright E2E Tests para LOGISTIQ B2B Real Estate
// QA Lead: Joaquín

import { test, expect } from '@playwright/test';

test.describe('LOGISTIQ B2B - Search & Filter Suite', () => {
  test('la plataforma carga con título corporativo y métricas', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/LOGISTIQ B2B/);
    await expect(page.locator('#buscador')).toBeVisible();
    await expect(page.locator('#results-count')).toContainText('activos encontrados');
  });

  test('filtrado por tipología actualiza el grid de activos', async ({ page }) => {
    await page.goto('/');
    await page.selectOption('#filter-type', 'nave');
    const cards = page.locator('#properties-grid > div');
    const count = await cards.count();
    expect(count).toBeGreaterThan(0);
  });

  test('simulador financiero de Cap Rate recalcula métricas en vivo', async ({ page }) => {
    await page.goto('/');
    const caprateInitial = await page.locator('#calc-result-caprate').innerText();
    expect(caprateInitial).toContain('%');

    // Mover slider de precio
    await page.fill('#slider-price', '4000000');
    await page.dispatchEvent('#slider-price', 'input');
    
    const caprateUpdated = await page.locator('#calc-result-caprate').innerText();
    expect(caprateUpdated).not.toBe(caprateInitial);
  });

  test('modal de ficha técnica abre y contiene botón de WhatsApp', async ({ page }) => {
    await page.goto('/');
    const firstCardBtn = page.locator('#properties-grid button').first();
    await firstCardBtn.click();
    
    await expect(page.locator('#property-modal')).toBeVisible();
    await expect(page.locator('#modal-wa-btn')).toBeVisible();
  });

  test('responsive mobile 375px', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');
    await expect(page.locator('header')).toBeVisible();
    await expect(page.locator('#buscador')).toBeVisible();
    await expect(page.locator('#properties-grid')).toBeVisible();
  });
});
