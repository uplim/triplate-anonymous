import { BasePage } from '@/tests/helpers/pages/base';
import type { Locator, Page } from '@playwright/test';

export class NewPage extends BasePage {
  readonly submitButton: Locator;

  constructor(page: Page) {
    super(page);
    this.submitButton = page.getByRole('button', { name: '旅程を作成する' });
  }

  async goto() {
    await this.page.goto('/new');
  }
}
