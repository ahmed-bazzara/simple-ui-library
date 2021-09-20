import React from 'react';
import { jsx, css, ObjectInterpolation } from '@emotion/core';

import { pointerHandlers } from 'utilities';
import { rem } from 'utilities/css';
import { ColorName, COLOR } from '../../constants';
import {
  TYPOGRAPHY_ALIGNMENT,
  TypographyAlignment,
  TextSizeValue,
} from './typography.constants';

export type TypographyProps = {
  color?: ColorName;
  children?: React.ReactNode;
  className?: string;
  variant: { element: string; style: ObjectInterpolation<undefined> };
  noTopMargin?: boolean;
  noBottomMargin?: boolean;
  lineClamp?: number;
  align?: TypographyAlignment;
  onClick?: (
    event: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>
  ) => void;
  size?: TextSizeValue;
};

const Typography: React.FC<TypographyProps> = (props) => {
  const {
    variant,
    align = TYPOGRAPHY_ALIGNMENT.INHERIT,
    color,
    children,
    lineClamp,
    noTopMargin,
    noBottomMargin,
    className,
    onClick,
    size,
  } = props;

  const { element, style } = variant;

  return jsx(
    element,
    {
      ...(onClick && pointerHandlers(onClick)),
      css: css({
        fontFamily: 'Open Sans',
        wordBreak: 'break-word',
        overflowWrap: 'break-word',
        color: color === undefined ? 'inherit' : COLOR[color],
        textAlign: align,
        ...(lineClamp &&
          (lineClamp === 1
            ? {
              display: 'block',
              minWidth: 0,
              maxWidth: '100%',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
            }
            : {
              overflow: 'hidden',
              minWidth: 0,
              maxWidth: '100%',
              display: '-webkit-box',
              whiteSpace: 'normal',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: lineClamp,
            })),
        ...style,
        ...(noTopMargin && { marginTop: 0 }),
        ...(noBottomMargin && { marginBottom: 0 }),
        ...(size && { fontSize: rem(size) }),
      }),
      className,
    },
    children,
  );
};

export default Typography;
