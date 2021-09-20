import React from 'react';
import { ColorName } from '../../../constants';
import { TypographyAlignment } from '../typography.constants';
import Typography from '../Typography';
import paragraphVariants from './paragraph.variants';
import { ParagraphVariant, PARAGRAPH_VARIANT } from './paragraph.constants';

export type ParagraphProps = {
  color?: ColorName;
  children?: React.ReactNode;
  className?: string;
  variant?: ParagraphVariant;
  noBottomMargin?: boolean;
  lineClamp?: number;
  align?: TypographyAlignment;
  onClick?: (
    event: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>
  ) => void;
};

export const Paragraph: React.FC<ParagraphProps> = (props) => {
  const {
    variant = PARAGRAPH_VARIANT.NORMAL,
    color = 'text',
    ...restProps
  } = props;

  return (
    <Typography
      {...restProps}
      color={color}
      variant={paragraphVariants[variant]}
    />
  );
};

export default Paragraph;
