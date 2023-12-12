import i18next from 'i18next';

import { initI18next } from './init-i18next';

describe('initI18next', () => {
  test('i18nextの初期化処理が一度だけ呼ばれる', () => {
    const initMock = jest.spyOn(i18next, 'init');

    // まだ呼ばれていない
    expect(initMock).toHaveBeenCalledTimes(0);

    // i18next初期化
    initI18next('ja');

    // 初期化処理が一度呼ばれている
    expect(initMock).toHaveBeenCalledTimes(1);

    // もう一度呼び出す
    initI18next('ja');

    // 一度初期化されているので呼ばれない
    expect(initMock).toHaveBeenCalledTimes(1);
  });
});
