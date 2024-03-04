import { TestInfo } from '@playwright/test';

export const screenshotPath = (title: string, testInfo: TestInfo) =>
  testInfo.outputPath(`${testInfo.title} > ${title}.png`);
