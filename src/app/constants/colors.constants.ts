export const COLOR = {
  // primary
  primary: 'rgba(126, 206, 205, 1)',
  primary24: 'rgba(126, 206, 205, 0.24)',
  primary5: 'rgba(126, 206, 205, 0.05)',
  primaryText: 'rgba(82, 152, 150, 1)',
  // primary_light: 'linear-gradient(0deg, rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.16)), #7ECECD',
  // primary_dark: 'linear-gradient(0deg, rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.08)), #7ECECD',

  // secondary
  secondary: 'rgba(68, 91, 102, 1)',
  secondary80: 'rgba(68, 91, 102, 0.8)',
  secondary5: 'rgba(68, 91, 102, 0.05)',
  secondary24: 'rgba(68, 91, 102, 0.24)',

  // negative
  negative: 'rgba(242, 133, 133, 1)',
  negative80: 'rgba(242, 133, 133, 0.8)',
  negative5: 'rgba(242, 133, 133, 0.05)',
  negativeText: 'rgba(182, 96, 96, 1)',
  // negative_light: 'linear-gradient(0deg, rgba(255, 255, 255, 0.24), rgba(255, 255, 255, 0.24)), #F28585',
  // negative_dark: 'linear-gradient(0deg, rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.08)), #F28585',

  // caution
  caution: 'rgba(242, 184, 121, 1)',
  caution80: 'rgba(242, 184, 121, 0.8)',
  caution5: 'rgba(242, 184, 121, 0.05)',
  cautionText: 'rgba(179, 138, 94, 1)',

  // neutrals
  neutralWhite: '#fff',
  neutralWhite10: 'rgba(255, 255, 255, 0.1)',
  neutralWhite5: 'rgba(255, 255, 255, 0.05)',
  neutralWhite24: 'rgba(255, 255, 255, 0.24)',

  neutralGrey5: 'rgba(246, 246, 246, 1)',
  neutralGrey10: 'rgba(238, 238, 238, 1)',
  neutralGrey28: 'rgba(204, 204, 204, 1)',

  // text
  text: 'rgba(68, 68, 68, 1)',
  text5: 'rgba(68, 68, 68, 0.05)',
  text10: 'rgba(68, 68, 68, 0.1)',
  text24: 'rgba(68, 68, 68, 0.24)',
  textDisabled: 'rgba(68, 68, 68, 0.48)',

  // navigation
  navigation: 'rgba(145, 174, 181, 1)',
  navigationDark: 'rgba(125, 152, 158, 1)',
  navigationDarkest: 'rgba(110, 136, 144, 1)',

  // secondary/green
  secondaryGreen: 'rgba(129, 208, 128, 1)',

  // Black
  black: 'rgba(0, 0, 0, 1)',
  shadowBlackPrimary: 'rgba(0, 0, 0, 0.2)',
  shadowBlackSecondary: 'rgba(0, 0, 0, 0.12)',
  shadowBlackTertiary: 'rgba(0, 0, 0, 0.14)',

  legacy_primary_alternative: '#4a6572',
} as const;

export type ColorName = keyof typeof COLOR;
