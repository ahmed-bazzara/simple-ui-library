/* eslint-disable radix */
const hexPattern = /^#([\dA-Fa-f]{6}|[\dA-Fa-f]{3})$/;
const rgbPattern = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i;
const rgbaPattern =
  /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(1|(?:0\.?\d*)|(?:\.\d+))\s*\)$/i;

export const parseColor = (
  color: string,
): null | [number, number, number, number] => {
  if (hexPattern.test(color)) {
    if (color.length === 7) {
      return [
        Number.parseInt(color.slice(1, 3), 16),
        Number.parseInt(color.slice(3, 5), 16),
        Number.parseInt(color.slice(5, 7), 16),
        1,
      ];
    }

    return [
      Number.parseInt(color.charAt(1), 16) * 0x11,
      Number.parseInt(color.charAt(2), 16) * 0x11,
      Number.parseInt(color.charAt(3), 16) * 0x11,
      1,
    ];
  }

  const rgbMatch = rgbPattern.exec(color);
  if (rgbMatch) {
    return [
      Number.parseInt(rgbMatch[1]),
      Number.parseInt(rgbMatch[2]),
      Number.parseInt(rgbMatch[3]),
      1,
    ];
  }

  const rgbaMatch = rgbaPattern.exec(color);
  if (rgbaMatch) {
    return [
      Number.parseInt(rgbaMatch[1]),
      Number.parseInt(rgbaMatch[2]),
      Number.parseInt(rgbaMatch[3]),
      Number.parseFloat(rgbaMatch[4]),
    ];
  }

  return null;
};

export default parseColor;
