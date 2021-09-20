/* eslint-disable radix */
const hexPattern = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
const rgbPattern = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i;
const rgbaPattern = /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(1|(?:[0]\.?\d*)|(?:\.\d+))\s*\)$/i;

export const parseColor = (
  color: string,
): null | [number, number, number, number] => {
  if (hexPattern.exec(color)) {
    if (color.length === 7) {
      return [
        parseInt(color.slice(1, 3), 16),
        parseInt(color.slice(3, 5), 16),
        parseInt(color.slice(5, 7), 16),
        1,
      ];
    }

    return [
      parseInt(color.charAt(1), 16) * 0x11,
      parseInt(color.charAt(2), 16) * 0x11,
      parseInt(color.charAt(3), 16) * 0x11,
      1,
    ];
  }

  const rgbMatch = rgbPattern.exec(color);
  if (rgbMatch) {
    return [
      parseInt(rgbMatch[1]),
      parseInt(rgbMatch[2]),
      parseInt(rgbMatch[3]),
      1,
    ];
  }

  const rgbaMatch = rgbaPattern.exec(color);
  if (rgbaMatch) {
    return [
      parseInt(rgbaMatch[1]),
      parseInt(rgbaMatch[2]),
      parseInt(rgbaMatch[3]),
      parseFloat(rgbaMatch[4]),
    ];
  }

  return null;
};

export default parseColor;
