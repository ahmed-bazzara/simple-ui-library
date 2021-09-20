import rgba from '../rgba';

describe('rgba', () => {
  test.each([
    '123456',
    '#afafah',
    '#123abcde',
    '#afaf',
    '#F0h',
    'rgb(1000, 0, 0)',
    'rgb(0, 0, 0, 0)',
    'rgba(0, 0, 0)',
    'rgba(0, 0, 0, 2)',
  ])('given invalid color (%p, %p), throws error', (color) => {
    expect(() => rgba(color, 1)).toThrowError();
  });
  test.each([
    ['#000000', 1, 'rgba(0, 0, 0, 1)'],
    ['#000000', 0.5, 'rgba(0, 0, 0, 0.5)'],
    ['rgb(0,0,0)', 0.5, 'rgba(0, 0, 0, 0.5)'],
    ['rgba(0,0,0,0.5)', 0.5, 'rgba(0, 0, 0, 0.5)'],
  ])('given (%p, %p), returns %p', (color, alpha, result) => {
    expect(rgba(color, alpha)).toStrictEqual(result);
  });
});
