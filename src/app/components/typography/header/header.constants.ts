import headerVariants from './header.variants';

export type HeaderVariant = keyof typeof headerVariants;

export const HEADER_VARIANT = Object.keys(headerVariants).reduce(
  (result, variant) => {
    result[variant] = variant;

    return result;
  },
  {} as Record<string, string>,
) as { [K in HeaderVariant]: K };
