import withDefaultUnit from '../withDefaultUnit';

describe('withDefaultUnit', () => {
  test.each<[Parameters<typeof withDefaultUnit>, string]>([
    [[200, 'ms'], '200ms'],
    [[100, 'px'], '100px'],
    [['10rem', 'px'], '10rem'],
  ])('given %p, returns %p', (args, result) => {
    expect(withDefaultUnit(...args)).toBe(result);
  });
});
