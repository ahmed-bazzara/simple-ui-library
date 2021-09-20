import parseCol from './parseColor';

const rgba = (color: string, alpha: number): string => {
  const rgba = parseCol(color);

  if (rgba === null) {
    throw new Error(`${color} is not a valid hex-, rgb-, or rgba-color.`);
  }

  const [r, g, b] = rgba;

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export default rgba;
