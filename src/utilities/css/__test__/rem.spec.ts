import rem from '../rem';

describe('rem', () => {
  test.each([
    [0, '0rem'],
    [8, '0.5rem'],
    [16, '1rem'],
    [32, '2rem'],
  ])('given %p, returns %p', (pixels, result) => {
    expect(rem(pixels)).toBe(result);
  });
});
