import shallowCompare from '../shallowCompare';

describe('shallowCompare', () => {
  test.each<
  [
    [
      Record<string, unknown> | undefined,
      Record<string, unknown> | undefined,
    ],
    boolean,
  ]
  >([
    [[undefined, undefined], true],
    [[{}, {}], true],
    [[{}, undefined], false],
    [[{ foo: 'foo' }, { foo: 'foo' }], true],
    [[{ foo: 'foo' }, { foo: 'bar' }], false],
    [[{ foo: 'foo' }, { bar: 'foo' }], false],
    [[{ foo: '1' }, { foo: 1 }], false],
  ])('given %p, returns %p', (args, result) => {
    expect(shallowCompare(...args)).toBe(result);
  });
});
