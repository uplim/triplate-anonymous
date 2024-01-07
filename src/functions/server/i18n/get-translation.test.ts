/**
 * @jest-environment node
 */

import { getLocale } from './get-locale';
import { getTranslation } from './get-translation';

describe('getTranslation', () => {
  test('指定したnsに属する文言を翻訳できる', async () => {
    const { t: globalT } = await getTranslation();
    const { t: pageT } = await getTranslation('new');

    // localeがjaであることを確認
    expect(getLocale()).toBe('ja');

    const globalKey = 'common.triplate.title';
    const pageKey = 'new.header.title';

    // nsを指定しない時はnsがglobalの文言を翻訳できる
    expect(globalT(globalKey)).toBe(
      'TRIPLATE - たびにいきたくなる旅程管理アプリ'
    );
    expect(globalT(pageKey)).toBe('new.header.title');

    // nsをpageにするとnsがpageの文言のみ翻訳できる
    expect(pageT(pageKey)).toBe('新しい旅程の作成');
    expect(pageT(globalKey)).toBe('common.triplate.title');
  });
});
