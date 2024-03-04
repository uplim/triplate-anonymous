import { NewPage } from '@/tests/helpers/pages/new';
import { expect, test } from '@playwright/test';

test('サンプルのintegテスト', async ({ page }) => {
  const newPage = new NewPage(page);

  // newに遷移する
  newPage.goto();

  await expect(page).toHaveTitle(
    '新しい旅程の作成 - TRIPLATE - たびにいきたくなる旅程管理アプリ'
  );
});
