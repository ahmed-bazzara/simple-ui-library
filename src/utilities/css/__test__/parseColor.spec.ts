// eslint-disable-next-line import/no-named-as-default
import parseColor from '../parseColor';

describe('parseColor', () => {
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
  ])('given invalid color %p, returns null', (string) => {
    expect(parseColor(string)).toBe(null);
  });

  test.each([
    ['#000000', [0, 0, 0, 1]],
    ['#000', [0, 0, 0, 1]],
    ['#ffffff', [255, 255, 255, 1]],
    ['#fff', [255, 255, 255, 1]],
    ['rgb(0,0,0)', [0, 0, 0, 1]],
    ['rgb(255, 255, 255)', [255, 255, 255, 1]],
    ['rgba(255, 255, 255, .5)', [255, 255, 255, 0.5]],
    ['rgba(255, 255, 255, 0.5)', [255, 255, 255, 0.5]],
    ['rgba(255, 255, 255, 1)', [255, 255, 255, 1]],
  ])('given %p, returns %p', (string, rgba) => {
    expect(parseColor(string)).toStrictEqual(rgba);
  });
});
