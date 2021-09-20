type ValueOf<T> = T[keyof T];

export * from './stories.constants';
export * from './colors.constants';
export * from './css.constants';

export const TOGGLE_TYPES = {
  SWITCH: 'switch',
  CHECKBOX: 'checkbox',
  RADIO: 'radio',
} as const;

export type ToggleType = ValueOf<typeof TOGGLE_TYPES>;

export const RADIO_TYPES = {
  BUTTON: 'button',
  TOGGLE: 'toggle',
} as const;

export const ORIENTATIONS = {
  HORIZONTAL: 'horizontal',
  VERTICAL: 'vertical',
} as const;

export const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
] as const;

export const THEMES = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  NEGATIVE: 'negative',
  NEUTRAL: 'neutral',
} as const;

export type Theme = ValueOf<typeof THEMES>;

export const THEME_MODES = Object.values(THEMES);

export const APPEARANCES = {
  REGULAR: 'regular',
  SQUARE: 'square',
  CIRCULAR: 'circular',
  LINK: 'link',
  LINK_SMALL: 'link-small',
} as const;

export type AppearanceType = ValueOf<typeof APPEARANCES>;

export const APPEARANCE_MODES = Object.values(APPEARANCES);

export type TagAppearance = 'dark' | 'red' | 'light' | 'yellow' | 'pale-azure'; // why is there a need to overcomplicate it with Object.values(...), harder to type and casting is required in knobs

export const TABS_DIRECTION = {
  TOP: 'top',
  BOTTOM: 'bottom',
  LEFT: 'left',
  RIGHT: 'right',
} as const;

export type DirectionType = ValueOf<typeof TABS_DIRECTION>;
