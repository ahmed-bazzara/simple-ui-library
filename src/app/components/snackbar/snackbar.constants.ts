type ConstantEnum<T extends string> = {
  [K in T]: K;
};

export type SnackbarType = 'DEFAULT' | 'WARNING';

export const SNACKBAR_TYPES: ConstantEnum<SnackbarType> = {
  DEFAULT: 'DEFAULT',
  WARNING: 'WARNING',
};
