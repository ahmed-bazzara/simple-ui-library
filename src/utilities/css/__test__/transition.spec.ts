import transition from '../transition';

describe('transition', () => {
  test.each<[Parameters<typeof transition>, string]>([
    [['color'], 'color 200ms cubic-bezier(0.55, 0, 0.1, 1) 0ms'],
    [
      ['color', '100ms', 'ease-in-out', '300ms'],
      'color 100ms ease-in-out 300ms',
    ],
    [['color', 100, 'ease-in-out', 300], 'color 100ms ease-in-out 300ms'],
  ])('given %p, returns %p', (args, result) => {
    expect(transition(...args)).toBe(result);
  });
});
