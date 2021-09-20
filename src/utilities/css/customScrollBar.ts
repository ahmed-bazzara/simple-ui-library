import { css, SerializedStyles } from '@emotion/react';
import rem from './rem';
// import rgba from './rgba';

export const customScrollBar = (
  thumbColor: string,
  trackColor?: string,
  hoverColor?: string,
): SerializedStyles =>
  css({
    '::-webkit-scrollbar': { width: rem(12) },

    '::-webkit-scrollbar-track': trackColor && { background: trackColor },

    '::-webkit-scrollbar-thumb': {
      background: thumbColor,
      borderRadius: rem(4),
    },

    '::-webkit-scrollbar-thumb:hover': hoverColor && { background: hoverColor },
  });

export default customScrollBar;
