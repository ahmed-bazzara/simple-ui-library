import { ValueOf } from 'app/constants';

export type TypographyAlignment =
  | 'inherit'
  | 'left'
  | 'center'
  | 'right'
  | 'justify';

export const TYPOGRAPHY_ALIGNMENT: Record<string, TypographyAlignment> = {
  INHERIT: 'inherit',
  LEFT: 'left',
  CENTER: 'center',
  RIGHT: 'right',
  JUSTIFY: 'justify',
};

export const TEXT_SIZES = {
  tiny: 9,
  small: 12,
  normal: 16,
  large: 20,
} as const;

type TextSizeObjectType = typeof TEXT_SIZES;

export type TextSizeValue = ValueOf<TextSizeObjectType>;

export type TextSize = keyof TextSizeObjectType;
