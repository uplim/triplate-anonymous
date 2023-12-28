/**
 * @jest-environment node
 */

import { ReadonlyHeaders } from 'next/dist/server/web/spec-extension/adapters/headers';
import * as headers from 'next/headers';

import { getLocale } from './get-locale';

describe('getLocale', () => {
  test('jaを取得できる', () => {
    // 言語設定をmock
    jest.spyOn(headers, 'headers').mockReturnValueOnce({
      get: (_header: string) => {
        return 'ja,en-US;q=0.9,en;q=0.8';
      },
    } as ReadonlyHeaders);

    const locale = getLocale();

    expect(locale).toBe('ja');
  });

  test('en-USを取得できる', () => {
    // 言語設定をmock
    jest.spyOn(headers, 'headers').mockReturnValueOnce({
      get: (_header: string) => {
        return 'en-US;q=0.9,en;q=0.8';
      },
    } as ReadonlyHeaders);

    // const locale = getLocale();

    // 英語をサポートしたらコメントを外す
    // expect(locale).toBe('en-US');
  });
});
