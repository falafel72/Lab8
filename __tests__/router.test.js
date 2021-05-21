/**
 * @jest-environment jsdom
 */

import { pushToHistory } from '../scripts/router.js';

/** 
 * To test: 
 *  - settings case
 *  - entry case
 *  - default case
 *  - check if stack is the correct size in all cases
 */

describe('router tests', () => {
    test('stack', () => {
      const historyLen = history.length;
      expect(pushToHistory('test',0).length).toBe(historyLen + 1);
    });

    test('settings', () => {
        expect(pushToHistory('settings', 0).state).toStrictEqual({ page: 'settings' });
    });

    test('entry', () => {
      expect(pushToHistory('entry', 13).state).toStrictEqual({page: 'entry13'});
    });

    test('default', () => {
        expect(pushToHistory('default', 0).state).toStrictEqual({});
    });
});