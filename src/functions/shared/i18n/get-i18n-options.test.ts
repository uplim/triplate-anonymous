import { getI18nOptions } from './';

describe('getI18nOptions', () => {
  test('optionを取得できる', () => {
    const options = getI18nOptions('ja');

    // 取得されるオプション数は6
    expect(Object.keys(options)).toHaveLength(6);

    // namespaceがデフォルト値のglobalになっている
    expect(options.ns).toBe('global');
    expect(options.defaultNS).toBe('global');
    expect(options.fallbackNS).toBe('global');

    // lng、fallbackLngには、localeと同じ値が設定される
    expect(options.fallbackLng).toBe('ja');
    expect(options.lng).toBe('ja');

    // サポートしている言語はjaのみ
    expect(options.supportedLngs).toEqual(['ja']);
  });

  test('namespaceを指定すると、nsの値が変更される', () => {
    // nsをpageに指定
    const options = getI18nOptions('ja', 'page');

    // 取得されるオプション数は6
    expect(Object.keys(options)).toHaveLength(6);

    // nsがpageになっている
    expect(options.ns).toBe('page');

    // defaultのnamespaceはglobalのまま
    expect(options.defaultNS).toBe('global');
    expect(options.fallbackNS).toBe('global');

    // lng、fallbackLngには、localeと同じ値が設定される
    expect(options.fallbackLng).toBe('ja');
    expect(options.lng).toBe('ja');

    // サポートしている言語はjaのみ
    expect(options.supportedLngs).toEqual(['ja']);
  });
});
