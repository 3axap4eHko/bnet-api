import * as utils from '../utils';

describe('Utils test suite', () => {
  test('upperFirst', () => {
    expect(utils.upperFirst('test')).toBe('Test');
    expect(utils.upperFirst('tEST')).toBe('TEST');
  });
  test('lowerFirst', () => {
    expect(utils.lowerFirst('Test')).toBe('test');
    expect(utils.lowerFirst('TEST')).toBe('tEST');
  });
  test('splitWords', () => {
    expect(utils.splitWords('')).toEqual([]);
    expect(utils.splitWords('test')).toEqual(['test']);
    expect(utils.splitWords('test-test')).toEqual(['test', 'test']);
  });
  test('cammelCase', () => {
    expect(utils.cammelCase('test-test')).toEqual('testTest');
  });
  test('toBase64', () => {
    expect(utils.toBase64('test-test')).toEqual(Buffer.from('test-test').toString('base64'));
  });
  test('normalize', () => {
    expect(utils.normalize({ _test: 1 })).toEqual({ test: 1 });
    expect(utils.normalize({ _test_case: 1 })).toEqual({ testCase: 1 });
  });
  test('pathify', () => {
    expect(utils.pathify('/test/{param}', { param: 'test' })).toEqual('/test/test');
  });
});
