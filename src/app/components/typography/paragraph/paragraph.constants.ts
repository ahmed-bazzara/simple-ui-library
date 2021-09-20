import paragraphVariants from './paragraph.variants';

export type ParagraphVariant = keyof typeof paragraphVariants;

export const PARAGRAPH_VARIANT = Object.keys(paragraphVariants).reduce(
  (result, variant) => {
    result[variant] = variant;

    return result;
  },
  {} as Record<string, string>,
) as { [K in ParagraphVariant]: K };
