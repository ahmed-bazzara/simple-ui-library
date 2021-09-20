import * as icons from './icons';

export const sizes = {
  SMALL: 16,
  NORMAL: 24,
  LARGE: 48,
};

export type IconName = keyof typeof icons;

export const ICON_NAME = Object.keys(icons).reduce((result, name) => {
  result[name] = name;

  return result;
}, {} as Record<string, string>) as { [K in IconName]: K };

export type IconSize = keyof typeof sizes;

export const ICON_SIZE = Object.keys(sizes).reduce((result, size) => {
  result[size] = size;

  return result;
}, {} as Record<string, string>) as { [K in IconSize]: K };
