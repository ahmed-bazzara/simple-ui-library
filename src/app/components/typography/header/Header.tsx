import React from 'react';
import { ColorName } from '../../../constants';
import { TypographyAlignment } from '../typography.constants';
import Typography from '../Typography';
import headerVariants from './header.variants';
import { HeaderVariant, HEADER_VARIANT } from './header.constants';

export type HeaderProps = {
  color?: ColorName;
  children?: React.ReactNode;
  className?: string;
  variant?: HeaderVariant;
  noTopMargin?: boolean;
  noBottomMargin?: boolean;
  lineClamp?: number;
  align?: TypographyAlignment;
  onClick?: (
    event: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>
  ) => void;
};

export const Header: React.FC<HeaderProps> = (props): JSX.Element => {
  const { variant = HEADER_VARIANT.H1, color = 'text', ...restProps } = props;

  return (
    <Typography
      {...restProps}
      color={color}
      variant={headerVariants[variant]}
    />
  );
};
