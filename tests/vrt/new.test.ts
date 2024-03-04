import { NewPage } from '@/tests/helpers/pages/new';
import { test } from '@playwright/test';
import { screenshotPath } from './helpers/screenshot-path';

test('vrtサンプル', async ({ page }, testInfo) => {
  const newPage = new NewPage(page);

  await newPage.goto();

  await page.screenshot({ path: screenshotPath('旅程作成ページ初期状態', testInfo) });
});
