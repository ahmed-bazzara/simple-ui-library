import React from 'react';
import Typography from '../Typography';
import textVariants from './text.variants';
import { TextVariant } from './text.constants';
import { TextSize, TEXT_SIZES } from '../typography.constants';
import { ColorName } from '../../../constants';

export type TextProps = {
  color?: ColorName;
  children?: React.ReactNode;
  className?: string;
  variant?: TextVariant;
  size?: TextSize;
  onClick?: (
    event: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>
  ) => void;
  lineClamp?: number;
  htmlFor?: string;
};

export const Text: React.FC<TextProps> = (props) => {
  const { variant = 'regular', size, ...restProps } = props;

  return (
    <Typography
      {...(size && { size: TEXT_SIZES[size] })}
      {...restProps}
      variant={textVariants[variant]}
    />
  );
};
