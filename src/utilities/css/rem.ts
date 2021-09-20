import { BASE_FONT_SIZE } from 'app/constants';

const rem = (...pixels: number[]): string => {
  return pixels.map((pixels) => `${pixels / BASE_FONT_SIZE}rem`).join(' ');
};

export default rem;
