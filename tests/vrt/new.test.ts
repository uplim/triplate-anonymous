import { NewPage } from '@/tests/helpers/pages/new';
import { expect, test } from '@playwright/test';
import { screenshotOption } from './helpers/screenshot-option';

test('vrtサンプル', async ({ page }, testInfo) => {
  const newPage = new NewPage(page);

  await newPage.goto();

  await expect(page).toHaveScreenshot(...screenshotOption('旅程作成ページ初期状態', testInfo));
});
